import Head from "next/head";
import { Layout } from "../components/shared/Layout";
import { config } from "../config";
import { mdiWhatsapp, mdiEmailOutline, mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function CustomThankyou() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Gracias por tu compra</title>
        </Head>
        <div className="px-8 py-12  max-w-6xl mx-auto">
          <h1 className="text-center text-xl font-bold">
            GRACIAS POR TU COMPRA
          </h1>
          <br />
          <h2 className="text-center text-md ">
            Hemos recibido su pago satisfactoriamente
          </h2>
          <Grid
            container
            spacing={2}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              spacing={2}
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              style={{
                maxWidth: "500px",
                padding: "16px 0"
              }}
            >
              <Grid item>
                <h2 className="text-center text-md px-2">
                  Por favor comunícate con uno de nuestros asesores para poder
                  detallar el tipo de habitaciones, itinerario, actividades y
                  cualquier duda que tengas.
                  <br></br> *Estaremos enviando su boleta/factura electrónica
                </h2>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  href={`https://wa.me/${config.contactPhone}?text="Hola"`}
                  className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "#4fce5d",
                    margin: 8,
                    borderColor: "#4fce5d",
                  }}
                  startIcon={<Icon path={mdiWhatsapp} size={1.5} />}
                >
                  <span>WHATSAPP</span>
                </Button>{" "}
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  href="/"
                  className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: config.colors.primary.DEFAULT,
                    margin: 8,
                    borderColor: config.colors.primary.DEFAULT,
                  }}
                  startIcon={<Icon path={mdiArrowLeft} size={1.5} />}
                >
                  <span>HOME</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
