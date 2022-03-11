import { FastifyPluginCallback } from "fastify";
import { BadRequest, NotFound } from "http-errors";
import { TOUR_PACKAGES } from "../../constants/collections";
import TourPackageSchema from "../../schemas/tour-package.json";
import { deleteFiles, getBase64Data, uploadFile } from "../../services/spaces";
import { ITourPackage } from "../../types/ITourPackage";
import { normalizeId } from "../../utils/normalize-id";
import { nanoid } from "nanoid";
import { parseRAQuery } from "../../utils/parse-ra-query";

interface IRoute {
  Params: { id: string };
  Body: ITourPackage;
}

export const tourPackagesRoute: FastifyPluginCallback = async (app) => {
  const TourPackages = app.mongo.db!.collection<ITourPackage>(TOUR_PACKAGES);

  class FilterDTO {}
  app.get("/", async (req, res) => {
    const { validation, ...query } = await parseRAQuery(req.query, FilterDTO);

    if (validation) {
      const error = new BadRequest("Validation failed");
      error.validation = validation;
      throw error;
    }

    const { range, sort } = query;
    const { length } = await TourPackages.find().project({ _id: 1 }).toArray();
    const tourPackages = await TourPackages.find()
      .sort(
        sort[0] === "_id"
          ? { _id: 1 }
          : { [sort[0]]: sort[1] === "ASC" ? 1 : -1, _id: 1 }
      )
      .skip(range[0])
      .limit(range[1] - range[0] + 1)
      .toArray();

    res.header(
      "Content-Range",
      `${range[0] + 1}-${Math.min(range[1] + 1, length)}/${length}`
    );
    return normalizeId(tourPackages);
  });

  app.get<IRoute>("/:id", async (req) => {
    const _id = new app.mongo.ObjectId(req.params.id);
    const tourPackage = await TourPackages.findOne({ _id });
    if (!tourPackage) throw new NotFound();
    return normalizeId(tourPackage);
  });

  app.post<{ Body: ITourPackage }>("/", {
    schema: {
      body: TourPackageSchema,
    },
    preValidation: async (req) => {
      Object.assign(req.body, {
        _id: new app.mongo.ObjectId(),
        createdAt: new Date(),
        updatedAt: new Date(),
        relevance: 0,
      });
      if (req.body.offer) {
        req.body.offer.from = new Date(req.body.offer.from);
        req.body.offer.to = new Date(req.body.offer.to);
      }
    },
    handler: async (req) => {
      const { _id } = req.body;
      req.body.images = await processTourPackageImages(
        _id + "",
        req.body.images
      );

      const result = await TourPackages.insertOne(req.body);
      return normalizeId(result.ops[0]);
    },
  });

  app.put<IRoute>("/:id", {
    schema: {
      body: TourPackageSchema,
    },
    preValidation: async (req) => {
      req.body._id = new app.mongo.ObjectId(req.params.id);
      req.body.createdAt = new Date(req.body.createdAt);
      req.body.updatedAt = new Date(req.body.updatedAt);
      if (req.body.offer) {
        req.body.offer.from = new Date(req.body.offer.from);
        req.body.offer.to = new Date(req.body.offer.to);
      }
    },
    handler: async (req) => {
      const { _id } = req.body;
      const tourPackage = await TourPackages.findOne({ _id });
      if (!tourPackage) throw new NotFound();

      Object.assign(req.body, {
        createdAt: tourPackage.createdAt,
        updatedAt: new Date(),
        images: await processTourPackageImages(
          _id + "",
          req.body.images,
          tourPackage.images
        ),
      });

      await TourPackages.replaceOne({ _id }, req.body);
      return normalizeId(req.body);
    },
  });

  app.delete<IRoute>("/:id", async (req) => {
    const _id = new app.mongo.ObjectId(req.params.id);
    const tourPackage = await TourPackages.findOne({ _id });
    if (tourPackage) {
      deleteFiles(tourPackage.images).catch(console.log);
      return TourPackages.deleteOne({ _id });
    }
  });
};

async function processTourPackageImages(
  folder: string,
  rawNewImages: string[],
  oldImages: string[] = []
) {
  const newImages = await Promise.all(
    rawNewImages.map((image) => {
      if (/^data:image/.test(image)) {
        const { buffer, mime, type } = getBase64Data(image);
        return uploadFile({
          name: `tour-packages/${folder}/${nanoid()}.${type}`,
          content: buffer,
          mime,
        });
      }
      return image;
    })
  );

  const imagesToDelete = oldImages.filter(
    (oldImage) => !newImages.includes(oldImage)
  );
  if (imagesToDelete.length) {
    deleteFiles(imagesToDelete).catch(console.log);
  }

  return newImages as [string, ...string[]];
}
