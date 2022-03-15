import { FastifyPluginCallback } from "fastify";
import { NotFound } from "http-errors";
import { TOUR_PACKAGES, PAYMENTS } from "../../constants/collections";
import { ITourPackage } from "../../types/ITourPackage";
import { ITourPayment } from "../../types/ITourPayment";
import { myTemplateDmoSms } from "../../template/TemplateDemoSms";
import { wrapedSendMail } from "../../helpers/wrapedSendMail";
import { format, addDays } from "date-fns";
import axios from "axios";
import mercadopago from "mercadopago";

import { normalizeId } from "../../utils/normalize-id";

interface IRequestPayment {
  title: string;
  unit_price: string;
  quantity: string;
}

export const tourPackagesRoute: FastifyPluginCallback = async app => {
  const TourPackages = app.mongo.db!.collection<ITourPackage>(TOUR_PACKAGES);
  app.get("/", async () => {
    console.log("hola");
    const tourPackages = await TourPackages.find()
      .sort({ relevance: -1, _id: 1 })
      .toArray();
    return normalizeId(tourPackages);
  });
  app.post("/payment", async (request: any, res) => {
    const TourPayment = app.mongo.db!.collection<ITourPayment>(PAYMENTS);
    const body = request.body;
    const {
      fullName,
      fullNameInvoice,
      addressInvoice,
      price,
      title,
      mail,
      phoneNumber,
      numberAttendees,
      documentReservation,
      documentInvoice,
      observation
    } = body;

    const tipoDocumento = documentInvoice.length === 8 ? "DNI" : "RUC";
    console.log("tipoDocumento", tipoDocumento);
    let preference = {
      items: [
        {
          title,
          unit_price: Number(price),
          quantity: numberAttendees
        }
      ],
/*       payer: {
        name: fullNameInvoice,
        email: mail,
        phone: { area_code: "51", number: Number(phoneNumber) as any },
        identification: { type: tipoDocumento, number: String(documentInvoice) }
      },
      back_urls: {
        "success": "https:///ms.test.innout.cloud/ms/travelapp/feedback",
        "failure": "https:///ms.test.innout.cloud/ms/travelapp/feedback",
        "pending": "https:///ms.test.innout.cloud/ms/travelapp/feedback"
      }, */
      //auto_return: "approved",
      notification_url:
        "https:///ms.test.innout.cloud/ms/travelapp/customer/tour-packages/payment/webhook"
    };
    console.log("preference", preference);

    const { MP_ACCESS_TOKEN } = process.env;
    console.log("MP_ACCESS_TOKEN", MP_ACCESS_TOKEN);
    mercadopago.configure({
      access_token: `${process.env.MP_ACCESS_TOKEN}`
    });
    const result = await mercadopago.preferences.create(preference as any);
    console.log("rezsponse", result);
    console.log("rezsponse", result.body);
    await TourPayment.insertOne({
      fullName,
      fullNameInvoice,
      addressInvoice,
      collector_id: result.body.id, //aqup[i el eroor]
      price,
      title,
      mail,
      phoneNumber,
      numberAttendees,
      documentReservation,
      documentInvoice,
      observation
    } as any);
    res.send({
      code: "00",
      data: { id: result.body.id, init_point: result.body.init_point }
    });

    //  .then(function (response) {
    //    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    //  })
    //  .catch(function (error) {
    //    console.log(error);
    //  });
  });
  app.post("/payment/webhook", async (request: any, res) => {
    const TourPayment = app.mongo.db!.collection<ITourPayment>(PAYMENTS);
    const body = request.body;
    console.log("body", body);
    const data = {
      action: "payment.created",
      api_version: "v1",
      data: {
        id: "1246751841"
      },
      date_created: "2022-03-12T17:40:59Z",
      id: 101087457402,
      live_mode: false,
      type: "payment",
      user_id: "650233529"
    };
    // const data = { ...body };
    // console.log("data", data);
    const detailsPayment = await axios({
      url: `https://api.mercadopago.com/v1/payments/${data.data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`
      }
    });
    console.log("detailsPayment.data.status", detailsPayment.data.status);
    console.log(
      "detailsPayment.data.status_detail",
      detailsPayment.data.status_detail
    );

    if (
      detailsPayment.data.status === "approved" &&
      detailsPayment.data.status_detail === "accredited"
    ) {
      const searchClient = await TourPayment.findOne({
        collector_id: data.user_id
      });
      const normalize = normalizeId(searchClient);
      console.log("normalize", normalize);
      const numberPrice = Number(normalize.price);
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      const today = format(new Date(), "yyyy-MM-dd");
      const todayTime = format(new Date(), "HH:mm:ss");
      const todayTimeExp = format(addDays(new Date(), 7), "yyyy-MM-dd");
      const body = {
        serie_documento:
          normalize.documentInvoice.length === 11 ? "F001" : "B001",
        numero_documento: "#", //*
        fecha_de_emision: today,
        hora_de_emision: todayTime,
        codigo_tipo_operacion: "0101",
        codigo_tipo_documento:
          normalize.documentInvoice.length === 11 ? "01" : "03",
        codigo_tipo_moneda: "PEN",
        fecha_de_vencimiento: todayTimeExp,
        numero_orden_de_compra: null, //*
        datos_del_cliente_o_receptor: {
          codigo_tipo_documento_identidad:
            normalize.documentInvoice.length === 11 ? "6" : "1",
          numero_documento: normalize.documentInvoice,
          apellidos_y_nombres_o_razon_social: normalize.fullNameInvoice,
          codigo_pais: "PE",
          ubigeo: "150101",
          direccion: normalize.addressInvoice,
          correo_electronico: normalize.mail,
          telefono: normalize.phoneNumber
        },
        totales: {
          total_exportacion: 0.0,
          total_operaciones_gravadas: numberPrice / (1 + 0.18),
          total_operaciones_inafectas: 0.0,
          total_operaciones_exoneradas: 0.0,
          total_operaciones_gratuitas: 0.0,
          total_igv: numberPrice - numberPrice / (1 + 0.18),
          total_impuestos: numberPrice - numberPrice / (1 + 0.18),
          total_valor: numberPrice / (1 + 0.18),
          total_venta: numberPrice
        },
        items: [
          {
            codigo_interno: null,
            descripcion: normalize.title,
            codigo_producto_sunat: "90121502",
            unidad_de_medida: "NIU",
            cantidad: normalize.numberAttendees,
            valor_unitario: numberPrice,
            codigo_tipo_precio: "01",
            precio_unitario: numberPrice / normalize.numberAttendees,
            codigo_tipo_afectacion_igv: "10",
            total_base_igv: numberPrice / (1 + 0.18),
            porcentaje_igv: numberPrice - numberPrice / (1 + 0.18),
            total_igv: numberPrice - numberPrice / (1 + 0.18),
            total_impuestos: numberPrice - numberPrice / (1 + 0.18),
            total_valor_item: numberPrice / (1 + 0.18),
            total_item: numberPrice
          }
        ],
        informacion_adicional: "Forma de pago:Transferencia|Caja: 1"
      };

      console.log("data ", data);
      const reloadProductos = await axios({
        url: `${process.env.INNOUT_HOST}/api/documents`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.INNOUT_TOKEN}`
        },
        data: body
      });
      const settingMail = {
        host: "correo.innout.pe", // Office 365 server
        port: "465", // secure SMTP
        secure: true, // false for TLS - as a boolean not string - but the default is false so just remove this completely
        auth: {
          user: "hola@innout.pe",
          pass: "@Lafv1992"
        },
        tls: {
          rejectUnauthorized: false
        }
      };
      const params = {
        fullName: normalize.fullName
      };
      const mailOptions = {
        from: `Samiria <hola@innout.pe>`, // sender address
        to: `${normalize.mail}`, // list of receivers
        subject: `confirmación de reserva | SAMIRIA`, // Subject line
        html: myTemplateDmoSms(params),
        attachments: [
          {
            filename:
              normalize.documentInvoice.length === 11 ? "Factura" : "Boleta",
            path: `${reloadProductos.data.links.pdf}`,
            contentType: "application/pdf"
          }
        ]
      };
      await wrapedSendMail(settingMail, mailOptions);
      res.send("correo enviado");
    }
  });

  app.get<{ Params: { slug: string } }>("/:slug", async req => {
    const { slug } = req.params;
    const tourPackage = await TourPackages.findOne({ slug });
    if (!tourPackage) throw new NotFound();
    return normalizeId(tourPackage);
  });
  app.get("/feedback",  (req: any, res) => {
    res.send({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id
    });
  });
};

