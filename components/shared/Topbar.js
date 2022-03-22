"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topbar = void 0;
var react_1 = __importDefault(require("@mdi/react"));
var link_1 = __importDefault(require("next/link"));
var js_1 = require("@mdi/js");
var config_1 = require("../../config");
var Topbar = function () {
    return (<div className="sticky top-0 inset-x-0 bg-white shadow z-20">
      <nav className="px-4 sm:px-8 py-2 sm:py-4 max-w-6xl mx-auto flex items-center space-x-6">
        <link_1.default href="/">
          <a className="mr-auto">
            <img className="h-12" src={config_1.config.assetImg(config_1.config.images.logo)} alt="Logo"/>
          </a>
        </link_1.default>
        <div className="flex items-center space-x-4 md:space-x-6 tracking-wider">
          <a href={"https://fb.com/".concat(config_1.config.fbUsername)} target="_blank" className="flex items-center space-x-1">
            <react_1.default path={js_1.mdiFacebook} size={1} color="#4267B2"/>
            <span className="text-sm hidden sm:block">
              /{config_1.config.fbUsername}
            </span>
          </a>
          <a href={"https://wa.me/".concat(config_1.config.contactPhone, "?text=Buen+d\u00EDa,+")} target="_blank" className="flex items-center space-x-1">
            <react_1.default path={js_1.mdiWhatsapp} size={1} color="#4fce5d"/>
            <span className="text-sm hidden sm:block">
              +{config_1.config.contactPhone}
            </span>
          </a>
        </div>
      </nav>
    </div>);
};
exports.Topbar = Topbar;
