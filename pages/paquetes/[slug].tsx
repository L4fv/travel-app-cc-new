import { useState, useEffect } from "react";
import Head from "next/head";
import Error from "next/error";
import Script from "next/script";

import { useRouter } from "next/router";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCube,
  Thumbs,
} from "swiper";
import { config } from "../../config";
import { Layout } from "../../components/shared/Layout";
import {
  fetchTourPackage,
  fetchTourPackages,
  useTourPackage,
} from "../../hooks/useTourPackages";
import { TourPackageSlider } from "../../components/tourPackages/Slider";
import { TourPackageCalendar } from "../../components/tourPackages/Calendar";
import { TourPackageDetails } from "../../components/tourPackages/Details";
import { TourPackageCapacity } from "../../components/tourPackages/Capacity";
import { TourPackageContact } from "../../components/tourPackages/Contact";
import { NoSSR } from "../../components/shared/NoSSR";
import {
  getOfferRate,
  getRemainingOfferDays,
  hasActiveOffer,
} from "../../utils/product";
declare global {
  interface Window {
    MercadoPago: any;
  }
}
SwiperCore.use([Navigation, Pagination, A11y, EffectCube, Thumbs]);

export default function TourPackagePage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const { data: tourPackage, error } = useTourPackage(slug, props.tourPackage);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [mp, setMercadoPago] = useState({});

  const [peopleQuantity, setPeopleQuantity] = useState(tourPackage || 1);

  if (error) return <Error statusCode={404} />;

  if (!tourPackage)
    return (
      <Layout>
        <div className="max-w-6xl mx-auto">Loading...</div>
      </Layout>
    );

  const hasOffer = hasActiveOffer(tourPackage);

  return (
    <Layout>
      <Head>
        <title>
          {tourPackage.name} | {config.name}
        </title>
      </Head>
      <Script
        id="mercadopago-js"
        src="https://sdk.mercadopago.com/js/v2"
        onLoad={() => {
          setMercadoPago(
            new window.MercadoPago(
              "TEST-408b3c56-a1f5-4dd0-9039-e222d131830b",
              { locale: "es-PE" }
            )
          );
        }}
      />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-6 md:gap-8 lg:gap-x-16 mb-6">
          <div className="min-w-0">
            <h1 className="text-primary text-3xl lg:text-4xl font-bold mb-6">
              {tourPackage.name}
            </h1>
            <NoSSR>
              <TourPackageSlider tourPackage={tourPackage} />
              <TourPackageDetails tourPackage={tourPackage} />
            </NoSSR>
          </div>
          <div>
            <div className="text-center my-6">
              <div className="inline-flex px-8 py-2 bg-secondary text-white rounded-full shadow-lg">
                {tourPackage.duration + 1} días / {tourPackage.duration} noches
              </div>
            </div>
            <TourPackageCalendar
              tourPackage={tourPackage}
              range={selectedDayRange}
              handleChange={setSelectedDayRange}
            />
            <div className="text-center mt-8 md:mt-12 mb-6">
              <div className="inline-flex px-8 py-2 bg-tertiary text-white rounded-full shadow-lg">
                <div>
                  {hasOffer && (
                    <span className="line-through">S/.{tourPackage.price}</span>
                  )}{" "}
                  S/.
                  {hasOffer ? tourPackage.offer.price : tourPackage.price} por
                  persona
                  {hasOffer && (
                    <span className="text-white mt-1 font-bold">
                      {" "}
                      (-{getOfferRate(tourPackage)}%)
                    </span>
                  )}
                </div>
              </div>
            </div>
            <TourPackageCapacity
              defaultCapacity={tourPackage.capacity.min}
              min={tourPackage.capacity.min}
              max={tourPackage.capacity.max}
              onChange={setPeopleQuantity}
            />
            <div className="text-center my-4">
              <div>TOTAL</div>
              {hasOffer && (
                <div className="text-gray-400 line-through">
                  S/.{tourPackage.price * peopleQuantity}
                </div>
              )}
              <div className="text-primary font-bold text-xl">
                {hasOffer && "Oferta: "}
                S/.
                {(hasOffer ? tourPackage.offer.price : tourPackage.price) *
                  peopleQuantity}
              </div>
              {hasOffer && (
                <p className="text-red-500">
                  La oferta termina en {getRemainingOfferDays(tourPackage)}.
                </p>
              )}
            </div>

            <TourPackageContact
              tourPackage={tourPackage}
              range={selectedDayRange}
              quantity={peopleQuantity}
              mp={mp}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  let tourPackages;
  try {
    tourPackages = await fetchTourPackages();
  } catch (error) {
    tourPackages = [];
  }
  const paths = tourPackages.map((tp) => ({ params: { slug: tp.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let tourPackage;

  try {
    tourPackage = await fetchTourPackage(params.slug);
  } catch (error) {
    console.log("eerror ", error);
    return {
      notFound: true,
    };
  }

  return { props: { tourPackage }, revalidate: 10 };
}
