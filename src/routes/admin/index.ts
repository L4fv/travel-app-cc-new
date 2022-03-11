import { FastifyPluginCallback } from "fastify";
import { loginRoute } from "./login";
import { tourPackagesRoute } from "./tour-packages";

export const adminRoute: FastifyPluginCallback = async (app) => {
  app.register(loginRoute, { prefix: "/login" });

  app.register(async (app) => {
    app.addHook("onRequest", async (request) => request.jwtVerify());
    app.register(tourPackagesRoute, { prefix: "/tour-packages" });
  });
};
