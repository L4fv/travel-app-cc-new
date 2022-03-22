import { FastifyPluginCallback } from "fastify";
import { tourPackagesRoute } from "./tour-packages";

export const customerRoute: FastifyPluginCallback = async (app) => {
  app.register(tourPackagesRoute, { prefix: "/tour-packages" });
};
