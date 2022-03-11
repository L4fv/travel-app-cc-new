import useSWR from "swr";
import { fetcher } from "../utils/api";

const TOUR_PACKAGES_PATH = "/customer/tour-packages/";

export const fetchTourPackage = (slug) => fetcher(TOUR_PACKAGES_PATH + slug);

export const fetchTourPackages = () => fetcher(TOUR_PACKAGES_PATH);

export const useTourPackage = (slug, initialData?) => {
  return useSWR(TOUR_PACKAGES_PATH + slug, fetcher, { initialData });
};

export const useTourPackages = (initialData?) => {
  return useSWR(TOUR_PACKAGES_PATH, fetcher, { initialData });
};
