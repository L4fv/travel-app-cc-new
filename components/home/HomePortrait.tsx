import { isDesktop } from "react-device-detect";
import { config } from "../../config";

const HTHeroContent = () => {
  return (
    <div className="relative max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold mb-12">
        Viajar es la mejor terapia
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        Te van a criticar por todo, tu solo compra ese pasaje a la selva. <br />
        <span className="font-bold">Viajar lo cura todo</span>
      </p>
    </div>
  );
};

const LMHeroContent = () => {
  return (
    <div className="relative max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="font-bold">VIAJAR</span> es recordarse lo que es{" "}
        <span className="font-bold">ESTAR VIVO</span>
      </h1>
    </div>
  );
};

export const HomePortrait = () => {
  const bgImgUrl = config.asset("/images/home/hero-mobile.jpeg");
  const content = {
    ht: <HTHeroContent />,
    lm: <LMHeroContent />,
    cc: <LMHeroContent />,
    sht: <LMHeroContent />,
  };

  return (
    <div
      className="relative overflow-hidden px-8 py-20 md:py-32 bg-gray-600 text-white flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bgImgUrl})`,
      }}
    >
      {isDesktop && (
        <div>
          <video
            className={`w-auto h-auto min-w-full min-h-full max-w-none
              absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
              pointer-events-none`}
            src={config.heroVideo.url}
            muted={true}
            loop={true}
            autoPlay={true}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))",
            }}
          />
        </div>
      )}
      {content[config.brand]}
    </div>
  );
};
