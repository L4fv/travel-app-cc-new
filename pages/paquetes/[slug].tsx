import { useState } from "react";
import Head from "next/head";
import Error from "next/error";
import Script from "next/script";

import { useRouter } from "next/router";
import { config } from "../../config";
import { Layout } from "../../components/shared/Layout";
import {
  fetchTourPackage,
  fetchTourPackages,
  useTourPackage,
} from "../../hooks/useTourPackages";
import { TourPackageSlider } from "../../components/tourPackages/Slider";
import { TourPackageFooter } from "../../components/tourPackages/Footer";
import { TourCardReserva } from "../../components/tourPackages/CardReserva";

import { TourPackageDetails } from "../../components/tourPackages/Details";

import * as React from "react";

import DefaultForm from "../../utils/model";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

export default function TourPackagePage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const selectIcon = [1, 3];
  const allIcon = DefaultForm.itemIcon();
  const itemsIcon = [];
  selectIcon.map((x) => itemsIcon.push(allIcon.find((y) => y.id === x)));
  const { data: tourPackage, error } = useTourPackage(slug, props.tourPackage);

  const [mp, setMercadoPago] = useState({});

  if (error) return <Error statusCode={404} />;

  if (!tourPackage)
    return (
      <Layout>
        <div className="max-w-6xl mx-auto">Loading...</div>
      </Layout>
    );

  const images = [];
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  console.log("slug tourPackage", tourPackage);

  const listPersons = [];
  for (
    let index = tourPackage.capacity.min;
    index <= tourPackage.capacity.max;
    index++
  ) {
    listPersons.push(index);
  }

  tourPackage.images.map((x) => {
    images.push({ imgPath: x });
  });
  return (
    <Layout>
      <div>
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
                `${process.env.NEXT_PUBLIC_PUBLICK_KEY_TEST_MERCADOPAGO}`,
                { locale: "es-PE" }
              )
            );
          }}
        />
        {/* <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 md:py-12"> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container className="bond">
            {/* header */}
            <Grid xs={12}>
              <TourPackageSlider tourPackage={images} />
            </Grid>
            {/* header */}
            {/* Body */}
            <Grid xs={12}>
              <Box sx={{ flexGrow: 1, paddingTop: "15px" }}>
                <Grid container>
                  {/* 1columna */}
                  <Grid sx={{ padding: "0 0 0 20px" }} xs={12} md={8}>
                    <div>
                      <h1 className="subHeader">{tourPackage.name}</h1>
                      <div className="subResumeBody mb-6">
                        <span className="points">8.3</span>
                        <span className="leftRigth">Fantástico</span>
                        <span className="indexComentario">Ver Comentarios</span>
                      </div>

                      <div className="iconItems">
                        {itemsIcon.map((x) => (
                          <div className="spaceIcon spaceLeftRigth">
                            <div className="  mb-2">
                              <x.icon sx={{ color: "#444444" }} />
                            </div>
                            <div>{x.description}</div>
                          </div>
                        ))}
                      </div>

                      <div className="py-8">
                        <TourPackageDetails tourPackage={tourPackage} />
                      </div>
                    </div>
                  </Grid>

                  <Grid xs={0} md={4}>
                    <Grid className="stickyDate">
                      <TourCardReserva tourPackage={tourPackage} mp={mp} />
                    </Grid>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* Body */}
            {/* Footer */}

            <Grid className="classFooter" xs={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid>
                  <Grid>
                    <TourPackageFooter tourPackage={tourPackage} mp={mp} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* Footer */}
          </Grid>
        </Box>
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
