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
import { TourPackageFooter } from "../../components/tourPackages/Footer";
import { TourCardReserva } from "../../components/tourPackages/CardReserva";
import { TourPackageCalendar } from "../../components/tourPackages/Calendar";
import { TourPackageDetails } from "../../components/tourPackages/Details";
import { TourPackageCapacity } from "../../components/tourPackages/Capacity";
import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MasksIcon from "@mui/icons-material/Masks";
import RestaurantMenuSharpIcon from "@mui/icons-material/RestaurantMenuSharp";
import DirectionsCarSharpIcon from "@mui/icons-material/DirectionsCarSharp";
import LocalBarSharpIcon from "@mui/icons-material/LocalBarSharp";
import InfoIcon from "@mui/icons-material/Info";
import { render } from "react-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import addDays from "date-fns/addDays";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { TourPackageContact } from "../../components/tourPackages/Contact";
import { NoSSR } from "../../components/shared/NoSSR";
import {
  getOfferRate,
  getRemainingOfferDays,
  hasActiveOffer,
} from "../../utils/product";
import { maxWidth, padding } from "@mui/system";
declare global {
  interface Window {
    MercadoPago: any;
  }
}
SwiperCore.use([Navigation, Pagination, A11y, EffectCube, Thumbs]);

export default function TourPackagePage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const [llegada, setValueLlegada] = React.useState<Date | null>(null);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "start",
    borderRadius: "0px",
    color: theme.palette.text.secondary,
  }));
  tourPackage.images.map((x) => {
    images.push({ imgPath: x });
  });
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
          <Grid xs={12} >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container >
                {/* 1columna */}
                <Grid sx={{padding:"0 0 0 20px"}} xs={12} md={8}>
                  <div>
                    <h1 className="subHeader">{tourPackage.name}</h1>
                    <div className="subResumeBody mb-6">
                      <span className="points">8.3</span>
                      <span className="leftRigth">Fantástico</span>
                      <span className="indexComentario">Ver Comentarios</span>
                    </div>
                    <div className=" headerDescription  mb-8">
                      <span className="pocketTime">
                        {" "}
                        <AccessTimeIcon
                          sx={{
                            fontSize: "16px",
                            lineHeight: "14px",
                            textAlign: "start",
                            letterSpacing: "normal",
                          }}
                        />
                      </span>
                      <span className="duration">Duración: 12 Hs.</span>
                      <span className="reservation">
                        {" "}
                        <InfoIcon
                          sx={{
                            fontSize: "16px",
                            lineHeight: "18px",
                            textAlign: "start",
                            letterSpacing: "normal",
                            marginRight: "4px",
                          }}
                        />
                        Reserva flexible
                      </span>
                    </div>
                  </div>

                  <div className="iconItems">
                    <div className="spaceIcon">
                      <div className="  mb-2">
                        <MasksIcon sx={{ color: "#444444" }} />
                      </div>
                      <div>Higiene</div>
                    </div>

                    <div className=" spaceIcon spaceLeftRigth">
                      <div className=" mb-2">
                        <RestaurantMenuSharpIcon sx={{ color: "#444444" }} />
                      </div>
                      <div>Comidas</div>
                    </div>

                    <div className="spaceIcon spaceLeftRigth">
                      <div className=" mb-2">
                        <DirectionsCarSharpIcon sx={{ color: "#444444" }} />
                      </div>
                      <div>Traslado</div>
                    </div>

                    <div className="spaceIcon spaceLeftRigth">
                      <div className=" mb-2">
                        <LocalBarSharpIcon sx={{ color: "#444444" }} />
                      </div>
                      <div>Bebidas</div>
                    </div>
                  </div>

                  <div>
                    <NoSSR>
                      <TourPackageDetails tourPackage={tourPackage} />
                    </NoSSR>
                  </div>
                </Grid>
                {/* 1columna */}
                {/* 2columna */}
                <Grid    xs={0} md={4}>
                  <Grid className="stickyDate">
                    <TourCardReserva tourPackage={tourPackage} mp={mp} />
                  </Grid>{" "}
                </Grid>
                {/* 2columna */}
              </Grid>
            </Box>
          </Grid>
          {/* Body */}
          {/* Footer */}

          <Grid className="classFooter" xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid>
                <Grid>
                  <TourPackageFooter tourPackage={tourPackage} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Footer */}
        </Grid>
      </Box>
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
