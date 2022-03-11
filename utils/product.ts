import { differenceInHours, isAfter, isBefore } from "date-fns";

export const hasActiveOffer = (product) => {
  return (
    product.offer?.enabled &&
    isAfter(new Date(), new Date(product.offer.from)) &&
    isBefore(new Date(), new Date(product.offer.to))
  );
};

export const getRemainingOfferDays = (product) => {
  const totalH = differenceInHours(new Date(product.offer?.to), new Date());
  const d = Math.floor(totalH / 24);
  const h = totalH % 24;
  return (d ? d + "d " : "") + h + "h";
};

export const getOfferRate = (product) => {
  return Math.floor(100 - (product.offer?.price * 100) / product.price);
};
