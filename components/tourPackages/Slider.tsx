//import Gallery from "react-photo-gallery-next";
import dynamic from "next/dynamic";
import { config } from "../../config";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TourPackageSlider = ({ tourPackage }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const photos = [];
  let indice = 0;
  tourPackage.map((x) => {
    photos.push({ src: x.imgPath });
    indice++;
  });
  while (photos.length < 5) {
    photos.push({
      src: config.assetImg(config.images.logo),
    });
    indice++;
  }

  return (
    <Box>
      <Grid>
        <Grid item xs={12} sx={{ display: { sm: "none", xs: "block" } }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {photos.map((step, index) => (
              <Grid container item xs={12} key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box component="img" className="imageSlider" src={step.src} />
                ) : (
                  <></>
                )}
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
        <Grid className="displayGallery">
          <Grid
            container
            sx={{
              height: "420px",
              margin: "24px 0",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                borderRadius: "10px 0px 0px 10px",
                height: "100%",
                padding: "0 8px 0 0",
              }}
            >
              <img
                src={photos[0].src}
                style={{
                  borderRadius: "10px 0px 0px 10px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              sx={{
                borderRadius: "10px 0px 0px 10px",
                height: "100%!important",
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  height: "50%!important",
                  padding: "0 8px 8px 0",
                }}
              >
                <img
                  src={photos[1].src}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />{" "}
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  height: "50%!important",
                  padding: "0 0 8px 0",
                }}
              >
                <img
                  src={photos[2].src}
                  style={{
                    borderRadius: "0px 10px 0px 0px",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />{" "}
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  height: "50%!important",
                  padding: "0 8px 0 0",
                }}
              >
                <img
                  src={photos[3].src}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />{" "}
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  height: "50%!important",
                }}
              >
                <img
                  src={photos[4].src}
                  style={{
                    borderRadius: "0px 0px 10px 0px",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>

    // Anterior widgets
  );
};
