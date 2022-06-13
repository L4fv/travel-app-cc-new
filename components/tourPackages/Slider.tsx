import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { config } from "../../config";

import LightGallery from "lightgallery/react";
import Gallery from "react-photo-gallery";
import { render } from "react-dom";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TourPackageSlider = ({ tourPackage }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tourPackage.length;
  console.log("tourPackage_slide", tourPackage);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  {
    /* <Gallery photos={photos} />; */
  }
  const photos = [];
  let indice = 0;
  tourPackage.map((x) => {
    photos.push({
      src: x.imgPath,
      width: size[indice].width,
      height: size[indice].height,
    });
    indice++;
  });
  console.log("photos", photos);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Grid className="displaySlider" xs={12} md={0}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tourPackage.map((step, index) => (
              <div>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "45vmin",
                      background: "black",
                      display: "block",
                      maxWidth: "auto",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>

        <Grid className="displayGallery">
          <Gallery
            photos={[
              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/r8UCjiv4A3jntC0PLDYh9.jpeg",
                width: 3,
                height: 2,
              },
              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/01Xct384PEAtyZbl6KS4O.png",
                width: 1,
                height: 1,
              },

              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/u6b_zelMEY3GheJj71Zu_.jpeg",
                width: 4,
                height: 3,
              },
              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/lhgzpzKBrZ38V_j3UoQri.jpeg",
                width: 1,
                height: 1,
              },
              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/LBLLqp6yjqUH17wpnR-k1.jpeg",
                width: 4,
                height: 3,
              },
              {
                src: "https://travel-app-space.nyc3.digitaloceanspaces.com/app/tour-packages/609dcc536f19af00bbb6d144/v3PKRhDPFMZ6dx1GMol7f.jpeg",
                width: 3,
                height: 4,
              },
            ]}
          />
        </Grid>
      </Grid>
    </Box>

    // Anterior widgets
  );
};

const size = [
  { width: 3, height: 2 },
  { width: 1, height: 1 },
  { width: 4, height: 3 },
  { width: 1, height: 1 },
  {
    width: 4,
    height: 3,
  },
  {
    width: 3,
    height: 4,
  },
  {
    width: 2,
    height: 1,
  },
  {
    width: 2,
    height: 1,
  },
  {
    width: 4,
    height: 3,
  },
];
