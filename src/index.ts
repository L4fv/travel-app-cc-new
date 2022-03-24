import "dotenv/config";
import fastify from "fastify";
import fastifyMongoDB from "fastify-mongodb";
import fastifyJWT from "fastify-jwt";
import fastifyCors from "fastify-cors";
import ajvBsonType from "ajv-bsontype";

import { baseRoute } from "./routes";
import { registerSchemas } from "./bootstrap/register-schemas";

const app = fastify({
  logger: true,
  bodyLimit: 10485760,
  ajv: { plugins: [ajvBsonType] },
});

app.register(fastifyCors, {
  exposedHeaders: ["Content-Range"],
});
console.log("process.env.MONGO_URL ", process.env.MONGO_URL);
app
  .register(fastifyMongoDB, {
    forceClose: true,
    url: process.env.MONGO_URL,
  })
  .after(() => registerSchemas(app));

app.register(fastifyJWT, {
  secret: process.env.JWT_SECRET!,
});

app.register(baseRoute);

const port = process.env.PORT || 8080;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
