import { config } from "../../config";

const HTExperienceContent = () => {
  return (
    <p className="text-secondary text-3xl md:text-6xl mb-6 text-center leading-relaxed md:leading-tight">
      SI NO VAS,
      <br />
      NUNCA
      <br />
      LO SABRÁS
      <br />
      <span className="text-tertiary font-bold text-4xl md:text-7xl">
        ¡VIAJA!
      </span>
    </p>
  );
};

const LMExperienceContent = () => {
  return (
    <p className="text-secondary text-3xl md:text-6xl mb-6 text-center leading-relaxed md:leading-tight">
      <span className="font-bold">ELIGE UNA RUTA,</span>
      <br />
      NO UNA RUTINA
    </p>
  );
};

export const HomeExperience = () => {
  const content = {
    ht: <HTExperienceContent />,
    lm: <LMExperienceContent />,
    sht: <LMExperienceContent />,
    htk: <LMExperienceContent />,
  };
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto md:flex items-center px-4 sm:px-8">
        {config.brand === "sht" ? (
          <img
            src={config.asset("/images/home/experience.jpeg")}
            alt="Experience"
            className="w-full rounded-lg shadow-lg"
          />
        ) : (
          <>
            <div className="md:w-3/5 mb-8 md:mb-0 md:p-8 md:order-1">
              {content[config.brand]}
            </div>
            <div className="md:w-2/5">
              <img
                src={config.asset("/images/home/experience.jpeg")}
                alt="Experience"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
