"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePortrait = void 0;
var react_device_detect_1 = require("react-device-detect");
var config_1 = require("../../config");
var NoSSR_1 = require("../shared/NoSSR");
var HTHeroContent = function () {
    return (<div className="relative max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold mb-12">
        Viajar es la mejor terapia
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        Te van a criticar por todo, tu solo compra ese pasaje a la selva. <br />
        <span className="font-bold">Viajar lo cura todo</span>
      </p>
    </div>);
};
var LMHeroContent = function () {
    return (<div className="relative max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="font-bold">VIAJAR</span> es recordarse lo que es{" "}
        <span className="font-bold">ESTAR VIVO</span>
      </h1>
    </div>);
};
var HomePortrait = function () {
    var bgImgUrl = config_1.config.asset("/images/home/hero-mobile.jpeg");
    var content = {
        ht: <HTHeroContent />,
        lm: <LMHeroContent />,
        sht: <LMHeroContent />,
    };
    return (<div className="relative overflow-hidden px-8 py-20 md:py-32 bg-gray-600 text-white flex items-center justify-center text-center bg-cover bg-center" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(".concat(bgImgUrl, ")"),
        }}>
      <NoSSR_1.NoSSR>
        {react_device_detect_1.isDesktop && (<div>
            <video className={"w-auto h-auto min-w-full min-h-full max-w-none\n              absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2\n              pointer-events-none"} src={config_1.config.heroVideo.url} muted={true} loop={true} autoPlay={true}/>
            <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))",
            }}/>
          </div>)}
      </NoSSR_1.NoSSR>
      {content[config_1.config.brand]}
    </div>);
};
exports.HomePortrait = HomePortrait;
