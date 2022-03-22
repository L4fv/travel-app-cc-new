"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var Layout_1 = require("../components/shared/Layout");
var config_1 = require("../config");
var js_1 = require("@mdi/js");
var react_1 = __importDefault(require("@mdi/react"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Button_1 = __importDefault(require("@mui/material/Button"));
function CustomThankyou() {
    return (<Layout_1.Layout>
      <head_1.default>
        <title>Gracias por tu compra</title>
      </head_1.default>
      <div className="px-8 py-12  max-w-6xl mx-auto">
        <h1 className="text-center text-xl font-bold">Gracias por tu compra</h1>
        <h2 className="text-center text-md ">
          Hemos recibido su pago satisfactoriamente
        </h2>
        <br />

        <br />
        <Grid_1.default container spacing={1} textAlign="center" alignItems="center" justifyContent="center" style={{
            maxWidth: "750px",
        }}>
          <Grid_1.default item xs={3} md={1}>
            <react_1.default path={js_1.mdiEmailOutline} size={3} color="blue"/>
          </Grid_1.default>
          <Grid_1.default item xs={9} md={11}>
            <h2 className="text-center text-md ">
              Estamos agradecidos por confiar en nosotros. Estamos preparando
              todo para darte mayor información y estaremos enviando
              Boleta/Factura a tu correo electrónico.
            </h2>
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Button_1.default variant="outlined" href={"https://wa.me/".concat(config_1.config.contactPhone, "?text=\"Hola\"")} className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl" style={{ backgroundColor: "#4fce5d", margin: 8 }} startIcon={<react_1.default path={js_1.mdiWhatsapp} size={1.5}/>}>
              <span>WHATSAPP</span>
            </Button_1.default>{" "}
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Button_1.default variant="outlined" href="/" className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl" style={{ backgroundColor: "blue", margin: 8 }} startIcon={<react_1.default path={js_1.mdiArrowLeft} size={1.5}/>}>
              <span>HOME</span>
            </Button_1.default>
          </Grid_1.default>
        </Grid_1.default>
      </div>
    </Layout_1.Layout>);
}
exports.default = CustomThankyou;
