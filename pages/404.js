"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var Layout_1 = require("../components/shared/Layout");
function Custom404() {
    return (<Layout_1.Layout>
      <head_1.default>
        <title>Travel App - Página no encontrada</title>
      </head_1.default>
      <div className="px-8 py-12  max-w-6xl mx-auto">
        <h1 className="text-center text-xl font-bold">Página no encontrada</h1>
      </div>
    </Layout_1.Layout>);
}
exports.default = Custom404;
