const ht = require("./hotelytourstarapoto");
const lm = require("./lamansion");
const sht = require("./samiria");
const cc = require("./cocolandia");
const htk = require("./hotelpark");

const BRANDS = ["ht", "lm", "sht", "cc", "htk"];
let brand = process.env.NEXT_PUBLIC_BRAND;
brand = BRANDS.includes(brand) ? brand : "ht";

const brandConfig =
  brand === "cc"
    ? cc
    : brand === "lm"
    ? lm
    : brand === "sht"
    ? sht
    : brand === "htk"
    ? htk
    : ht;
const baseConfig = {
  brand,
  asset: (path) => `/${brand}${path}`,
  assetImg: (path) => `/${brand}/images${path}`,
};

exports.config = { ...baseConfig, ...brandConfig };
