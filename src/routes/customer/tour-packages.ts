import { FastifyPluginCallback } from "fastify";
import { NotFound } from "http-errors";
import { TOUR_PACKAGES } from "../../constants/collections";
import { ITourPackage } from "../../types/ITourPackage";
import { normalizeId } from "../../utils/normalize-id";

export const tourPackagesRoute: FastifyPluginCallback = async (app) => {
  const TourPackages = app.mongo.db!.collection<ITourPackage>(TOUR_PACKAGES);

  app.get("/", async () => {
    const tourPackages = await TourPackages.find()
      .sort({ relevance: -1, _id: 1 })
      .toArray();
    return normalizeId(tourPackages);
  });

  app.get<{ Params: { slug: string } }>("/:slug", async (req) => {
    const { slug } = req.params;
    const tourPackage = await TourPackages.findOne({ slug });
    if (!tourPackage) throw new NotFound();
    return normalizeId(tourPackage);
  });
};
