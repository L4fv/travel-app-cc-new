"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeExperience = void 0;
var config_1 = require("../../config");
var HTExperienceContent = function () {
    return (<p className="text-secondary text-3xl md:text-6xl mb-6 text-center leading-relaxed md:leading-tight">
      SI NO VAS,
      <br />
      NUNCA
      <br />
      LO SABRÁS
      <br />
      <span className="text-tertiary font-bold text-4xl md:text-7xl">
        ¡VIAJA!
      </span>
    </p>);
};
var LMExperienceContent = function () {
    return (<p className="text-secondary text-3xl md:text-6xl mb-6 text-center leading-relaxed md:leading-tight">
      <span className="font-bold">ELIGE UNA RUTA,</span>
      <br />
      NO UNA RUTINA
    </p>);
};
var HomeExperience = function () {
    var content = {
      cc: <LMExperienceContent />,
        ht: <HTExperienceContent />,
        lm: <LMExperienceContent />,
        sht: <LMExperienceContent />,
    };
    return (<div className="bg-white py-12">
      <div className="max-w-6xl mx-auto md:flex items-center px-4 sm:px-8">
        {config_1.config.brand === "sht" ? (<img src={config_1.config.asset("/images/home/experience.jpeg")} alt="Experience" className="w-full rounded-lg shadow-lg"/>) : (<>
            <div className="md:w-3/5 mb-8 md:mb-0 md:p-8 md:order-1">
              {content[config_1.config.brand]}
            </div>
            <div className="md:w-2/5">
              <img src={config_1.config.asset("/images/home/experience.jpeg")} alt="Experience" className="w-full max-w-lg mx-auto rounded-lg shadow-lg"/>
            </div>
          </>)}
      </div>
    </div>);
};
exports.HomeExperience = HomeExperience;
