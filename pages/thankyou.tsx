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
      <Head>
        <title>Gracias por tu compra</title>
      </Head>
      <div className="px-8 py-12  max-w-6xl mx-auto">
        <h1 className="text-center text-xl font-bold">Gracias por tu compra</h1>
        <h2 className="text-center text-md ">
          Hemos recibido su pago satisfactoriamente
        </h2>
        <br />

        <br />
        <Grid
          container
          spacing={1}
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          style={{
            maxWidth: "750px",
          }}
        >
          <Grid item xs={3} md={1}>
            <Icon path={mdiEmailOutline} size={3} color="blue" />
          </Grid>
          <Grid item xs={9} md={11}>
            <h2 className="text-center text-md px-2">
              Estamos agradecidos por confiar en nosotros. Estamos preparando
              todo para darte mayor información y estaremos enviando
              Boleta/Factura a tu correo electrónico.
            </h2>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              href={`https://wa.me/${config.contactPhone}?text="Hola"`}
              className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#4fce5d", margin: 8 }}
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
              style={{ backgroundColor: "blue", margin: 8 }}
              startIcon={<Icon path={mdiArrowLeft} size={1.5} />}
            >
              <span>HOME</span>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
