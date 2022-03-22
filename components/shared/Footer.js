"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var config_1 = require("../../config");
var Footer = function () {
    return (<>
      <div className="p-8 bg-gray-800 text-gray-100 mt-auto">
        <div className="max-w-6xl mx-auto">
          <p className="text-center">&copy; {config_1.config.name}</p>
        </div>
      </div>
      {/* <div className="py-1 bg-black text-gray-400 text-xs text-center">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/carlos-duran/"
            target="_blank"
            className="underline"
          >
            Carlos Duran
          </a>
          .
        </div> */}
    </>);
};
exports.Footer = Footer;
