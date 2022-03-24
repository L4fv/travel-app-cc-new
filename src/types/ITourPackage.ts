/* eslint-disable */

/**
 * This file was automatically generated by bson-schema-to-typescript.
 * https://www.npmjs.com/package/bson-schema-to-typescript
 *
 * Do not modify it by hand. Instead, modify the MongoDB $jsonSchema validator,
 * and run bson2ts to regenerate this file.
 */

 export interface ITourPackage {
  _id: unknown;
  slug: string;
  name: string;
  price: number;
  offer?: {
    enabled: boolean;
    price: number;
    from: Date;
    to: Date;
  };
  capacity: {
    min: number;
    max: number;
  };
  duration: number;
  details: [
    {
      title: string;
      description: string;
    },
    ...{
      title: string;
      description: string;
    }[]
  ];
  images: [string, ...string[]];
  videos: string[];
  relevance?: number;
  createdAt: Date;
  updatedAt: Date;
}