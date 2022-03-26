import { FastifyInstance } from "fastify";
import { IndexOptions } from "mongodb";
import { TOUR_PACKAGES } from "../constants/collections";
import TourPackageSchema from "../schemas/tour-package.json";

type TEntity = {
  namespace: string;
  schema: any;
  indexes?: { keys: string | object; options: IndexOptions }[];
};

const entities: TEntity[] = [
  {
    namespace: TOUR_PACKAGES,
    schema: TourPackageSchema,
    indexes: [{ keys: { slug: 1 }, options: { unique: true } }],
  },
];

export const Schemas = async (app: FastifyInstance) => {
  for (const { namespace, schema, indexes } of entities) {
    try {
      await app.mongo.db?.createCollection(namespace);
    } catch (e) {
    } finally {
      /* await app.mongo.db?.command({
        collMod: namespace,
        validator: {
          $jsonSchema: schema,
        },
      }); */
    }

    if (!indexes) continue;
    for (const index of indexes) {
      try {
        await app.mongo.db?.createIndex(namespace, index.keys, index.options);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
