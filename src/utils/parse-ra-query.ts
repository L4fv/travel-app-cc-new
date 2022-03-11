import { isArray, isIn, isInt, isString, validate } from "class-validator";

type TFilterClass<T> = { new (): T };
type TRange = [number, number];
type TSort = [string, "ASC" | "DESC"];

export const isRange = (range: any) => {
  return isArray(range) && !range.some((n: any) => !isInt(n));
};

export const isSort = (range: any) =>
  isArray(range) && isString(range[0]) && isIn(range[1], ["ASC", "DESC"]);

export async function parseRAQuery<T>(
  query: any,
  FilterClass: TFilterClass<T>
) {
  const filter = new FilterClass();
  Object.assign(filter, JSON.parse(query.filter));
  const errors = await validate(filter as any, { skipMissingProperties: true });
  const range: TRange = query.range ? JSON.parse(query.range) : [0, 99];
  const sort: TSort = query.sort ? JSON.parse(query.sort) : ["_id", "ASC"];

  const result = { filter, range, sort };
  let validation = null;

  if (errors.length) {
    validation = errors;
  } else if (!isRange(range)) {
    validation = "Bad range";
  } else if (!isSort(sort)) {
    validation = "Bad sort";
  }

  if (sort[0] === "id") {
    sort[0] = "_id";
  }

  return { ...result, validation };
}
