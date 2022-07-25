import { useState } from "react";
import Head from "next/head";
import Error from "next/error";
import Script from "next/script";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            background: "#fff",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              background: "green",
              maxWidth: "1280px",
            }}
          >
            <Grid container className="bond">
              {/* header */}
              <Grid
              item
                xs={12}
                sx={{
                  background: "sky",
                }}
              >
                <TourPackageSlider tourPackage={images} />
              </Grid>
              {/* header */}
              {/* Body */}
              <Grid item xs={12}>
                <Grid container>
                  {/* 1columna */}
                  <Grid item sx={{ padding: "8px" }} xs={12} md={8}>
                    <div>
                      <h1 className="subHeader font-semibold">
                        {tourPackage.name}
                      </h1>
                      <div className="subResumeBody mb-6">
                        <span className="points">8.3</span>
                        <span className="leftRigth">Fantástico</span>
                      </div>

                      {itemsIcon.length > 0 ? (
                        <div className="iconItems">
                          {itemsIcon.map((x, index) => (
                            <div className="spaceIcon " key={index}>
                              <div className="mb-2 iconCSS ">
                                <Avatar
                                  className="avatar"
                                  src={x.src}
                                  sx={{ width: 16, height: 16 }}
                                />
                              </div>
                              <div className="descriptionIcon ">
                                {x.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}

                      <Grid item xs={12} sx={{ padding: "0 0 72px 0" }}>
                        <TourPackageDetails tourPackage={tourPackage} />
                      </Grid>
                    </div>
                  </Grid>

                  <Grid item xs={0} md={4}>
                    <Grid className="stickyDate">
                      <TourCardReserva tourPackage={tourPackage} mp={mp} />
                    </Grid>{" "}
                  </Grid>
                </Grid>
              </Grid>
              {/* Body */}
              {/* Footer */}

              <Grid item className="classFooter mt-12 " xs={12}>
                <Box>
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
