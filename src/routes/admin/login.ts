import { FastifyPluginCallback } from "fastify";

type LoginDTO = {
  email: string;
  password: string;
};

export const loginRoute: FastifyPluginCallback = async (app) => {
  app.post<{ Body: LoginDTO }>("/", {
    schema: {
      body: {
        type: "object",
        additionalProperties: false,
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
          },
        },
      },
    },
    async handler(request, reply) {
      const { email, password } = request.body;

      const isSuperadmin =
        email === process.env.SUPERADMIN_EMAIL &&
        password === process.env.SUPERADMIN_PASSWORD;

      if (!isSuperadmin) {
        return reply.code(401).send(new Error());
      }

      const token = app.jwt.sign({}, { expiresIn: "1d" });
      return { token };
    },
  });
};
