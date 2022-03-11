import { FastifyPluginCallback } from "fastify";
import { adminRoute } from "./admin";
import { customerRoute } from "./customer";

export const baseRoute: FastifyPluginCallback = async (app) => {
  app.get("/", async () => "Travel App API!");

  app.register(adminRoute, { prefix: "/admin" });
  app.register(customerRoute, { prefix: "/customer" });
};
