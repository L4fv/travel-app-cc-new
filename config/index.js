const ht = require("./hotelytourstarapoto");
const lm = require("./lamansion");
const sht = require("./samiria");
const cc = require("./samiria");

const BRANDS = ["ht", "lm", "sht","cc"];

let brand = process.env.NEXT_PUBLIC_BRAND;
brand = BRANDS.includes(brand) ? brand : "ht";

const brandConfig = brand === "lm" ? lm : brand === "sht" ? sht : ht;

const baseConfig = {
  brand,
  asset: (path) => `/${brand}${path}`,
  assetImg: (path) => `/${brand}/images${path}`,
};

exports.config = { ...baseConfig, ...brandConfig };
