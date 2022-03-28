import { value FastifyPluginCallback } from "fastify";
import { value NotFound } from "http-errors";
import {
  value TOUR_PACKAGES,
  value PAYMENTS,
} from "../../constants/collections";
import { value ITourPackage } from "../../types/ITourPackage";
import { value ITourPayment } from "../../types/ITourPayment";
import { value myTemplateDmoSms } from "../../template/TemplateDemoSms";
import { value wrapedSendMail } from "../../helpers/wrapedSendMail";
import { value format, value addDays } from "date-fns";
import axios from "axios";
import mercadopago from "mercadopago";

import { value normalizeId } from "../../utils/normalize-id";

interface IRequestPayment {
  title: string;
  unit_price: string;
  quantity: string;
}

export const tourPackagesRoute: FastifyPluginCallback = async (app) => {
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
    const _id = new app.mongo.ObjectId();

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
      observation,
      origen,
      titleMail,
    } = body;
    console.log("here---", body);
    const tipoDocumento =
      JSON.stringify(documentInvoice).length === 8 ? "DNI" : "RUC";
    console.log("tipoDocumento", tipoDocumento);
    let preference = {
      items: [
        {
          title,
          unit_price: Number(price),
          quantity: numberAttendees,
        },
      ],
      payer: {
        name: fullNameInvoice,
        email: mail,
        phone: { area_code: "51", number: Number(phoneNumber) },
        identification: {
          type: tipoDocumento,
          number: String(documentInvoice),
        },
      },
      back_urls: {
        success: `${origen}/thankyou`,
      },
      auto_return: "approved",
      notification_url: `${process.env.API_TOUR_HOST}/customer/tour-packages/payment/webhook?myPreferenceId=${_id}`,
    };

    console.log("preference", preference);

    const { MP_ACCESS_TOKEN } = process.env;
    console.log("MP_ACCESS_TOKEN", MP_ACCESS_TOKEN);
    mercadopago.configure({
      access_token: `${process.env.MP_ACCESS_TOKEN}`,
    });
    const result = await mercadopago.preferences.create(preference as any);

    console.log("rezsponse", result.body);

    await TourPayment.insertOne({
      _id,
      fullName,
      fullNameInvoice,
      addressInvoice,
      myPreferenceId: result.body.id, //aqup[i el eroor]
      price,
      title,
      mail,
      phoneNumber,
      numberAttendees,
      documentReservation,
      documentInvoice,
      observation,
      createdAt: new Date(),
      titleMail,
    } as any);

    res.send({
      code: "00",
      data: { id: result.body.id, init_point: result.body.init_point },
    });
  });
  app.post("/payment/webhook", async (request: any, res) => {
    const TourPayment = app.mongo.db!.collection<ITourPayment>(PAYMENTS);
    const body = request.body;
    console.log("request.body", body);
    console.log("req.query", request.query);

    // console.log("data", data);
    if (body["type"] == "payment") {
      const detailsPayment = await axios({
        url: `https://api.mercadopago.com/v1/payments/${body.data.id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      });

      console.log("detailsPayment.data.status", detailsPayment.data.status);

      if (
        detailsPayment.data.status === "approved" &&
        detailsPayment.data.status_detail === "accredited"
      ) {
        console.log(
          " request.query.myPreferenceId, ",
          request.query.myPreferenceId
        );
        const myPreferenceId = new app.mongo.ObjectId(
          request.query.myPreferenceId
        );

        const searchClient = await TourPayment.findOne({
          _id: myPreferenceId as any,
        });
        console.log("searchClient ", searchClient);
        const normalize = normalizeId(searchClient);
        console.log("normalize", normalize);
        const numberPrice = Number(normalize.price);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const today = format(new Date(), "yyyy-MM-dd");
        const todayTime = format(new Date(), "HH:mm:ss");
        const todayTimeExp = format(addDays(new Date(), 7), "yyyy-MM-dd");
        const _lengthDocument = normalize.documentInvoice.length;
        const totalIgv = numberPrice * 0.18;
        const data = {
          serie_documento: _lengthDocument === 11 ? "F001" : "B001",
          numero_documento: "#", //*
          fecha_de_emision: today,
          hora_de_emision: todayTime,
          codigo_tipo_operacion: "0101",
          codigo_tipo_documento: _lengthDocument === 11 ? "01" : "03",
          codigo_tipo_moneda: "PEN",
          fecha_de_vencimiento: todayTimeExp,
          numero_orden_de_compra: null, //*
          datos_del_cliente_o_receptor: {
            codigo_tipo_documento_identidad: _lengthDocument === 11 ? "6" : "1",
            numero_documento: normalize.documentInvoice,
            apellidos_y_nombres_o_razon_social: normalize.fullNameInvoice,
            codigo_pais: "PE",
            ubigeo: "150101",
            direccion: normalize.addressInvoice,
            correo_electronico: normalize.mail,
            telefono: normalize.phoneNumber,
          },
          totales: {
            total_exportacion: 0.0,
            total_operaciones_gravadas: numberPrice,
            total_operaciones_inafectas: 0.0,
            total_operaciones_exoneradas: 0.0,
            total_operaciones_gratuitas: 0.0,
            total_igv: 0.0,
            total_impuestos: 0.0,
            total_valor: numberPrice,
            total_venta: numberPrice,
          },
          items: [
            {
              codigo_interno: null,
              descripcion: normalize.title,
              codigo_producto_sunat: "90121502",
              unidad_de_medida: "ZZ",
              cantidad: normalize.numberAttendees,
              valor_unitario: numberPrice,
              codigo_tipo_precio: "01",
              precio_unitario: numberPrice / normalize.numberAttendees,
              codigo_tipo_afectacion_igv: "30", // inafecta
              total_base_igv: numberPrice,
              porcentaje_igv: 0,
              total_igv: 0,
              total_impuestos: 0,
              total_valor_item: numberPrice,
              total_item: numberPrice,
            },
          ],
          informacion_adicional: "Forma de pago:Transferencia|Caja: 1",
        };

        console.log("data ", data);
        const reloadProductos = await axios({
          url: `${process.env.INNOUT_HOST}/api/documents`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.INNOUT_TOKEN}`,
          },
          data,
        });
        const settingMail = {
          host: "smtp.gmail.com", // Office 365 server
          port: "587", // secure SMTP
          secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
          auth: {
            user: "jian@genbby.com",
            pass: "Genbbymirko4ever2020",
          },
          tls: {
            ciphers: "SSLv3",
          },
        };
        const params = {
          fullName: normalize.fullName,
        };
        const mailOptions = {
          from: `${normalize.titleMail} <jian@genbby.com>`, // sender address
          to: `${normalize.mail}`, // list of receivers
          subject: `Confirmación de reserva`, // Subject line
          html: myTemplateDmoSms(params),
          attachments: [
            {
              filename: _lengthDocument === 11 ? "Factura" : "Boleta",
              path: `${reloadProductos.data.links.pdf}`,
              contentType: "application/pdf",
            },
          ],
        };
        await wrapedSendMail(settingMail, mailOptions);
        res.send({ status: true, message: "ok" });
      } else {
        res.send({ status: true, message: "ok" });
      }
    } else {
      res.send({ status: true, message: "ok" });
    }
  });

  app.get<{ Params: { slug: string } }>("/:slug", async (req) => {
    const { slug } = req.params;
    const tourPackage = await TourPackages.findOne({ slug });
    if (!tourPackage) throw new NotFound();
    return normalizeId(tourPackage);
  });
  app.get("/feedback", (req: any, res) => {
    res.send({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id,
    });
  });
};
