"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMain = void 0;
var config_1 = require("../../config");
var HomeMainGrid_1 = require("./HomeMainGrid");
var HomeMain = function () {
    var description = {
        lm: "Paquetes turísticos diseñados para escaparse de la rutina a un gran precio",
        sht: "Paquetes turísticos diseñados para escaparse de la rutina a un gran precio",
        ht: "Tenemos paquetes turísticos a la medida de tus aventuras a un gran precio",
    };
    return (<div className="px-4 sm:px-8 py-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-primary uppercase font-bold mb-8">
          Disfruta de tus vacaciones
        </h2>
        <p className="md:text-lg">{description[config_1.config.brand]}</p>
        <HomeMainGrid_1.HomeMainGrid />
      </div>
    </div>);
};
exports.HomeMain = HomeMain;
