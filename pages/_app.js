"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var config_1 = require("../config");
require("../styles/globals.scss");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<>
      <head_1.default>
        <title>{config_1.config.name}</title>
      </head_1.default>
      <Component {...pageProps}/>
    </>);
}
exports.default = MyApp;
