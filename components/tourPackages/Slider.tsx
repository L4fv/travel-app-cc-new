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
  console.log('tourPackage_slide',tourPackage)
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
const photos =[]
tourPackage.map((x)=>{
  photos.push({src:x.imgPath})
})
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
        <Grid className="displayGallery" item xs={12}>
          <Box >
            <Grid container>
              <Grid sx={{ background: "red" }} xs={7}>
                <Gallery photos={[photos.[0]]} />
              </Grid>
              <Grid sx={{ background: "blue" }} xs={5}>
                <Box>
                  <Grid container>
                    <Grid sx={{ background: "brown" }} xs={12}>
                      <Gallery photos={[photos.[1]]} />
                    </Grid>
                    <Grid  sx={{ background: "yellow" }} xs={12}>
                      <Box >
                        <Grid container>
                          <Grid  xs={6}>
                            <Gallery photos={[photos.[2]]} />
                          </Grid>
                          <Grid  xs={6}>
                            <Gallery photos={[photos.[3]]} />
                          </Grid>
                        </Grid>
                      </Box>{" "}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>

    // Anterior widgets
  );
};
