//import Gallery from "react-photo-gallery-next";
import dynamic from "next/dynamic";
import { config } from "../../config";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";

const Gallery = dynamic(() => import("react-photo-gallery-next"), {
  // no ssr
  ssr: false,
});
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TourPackageSlider = ({ tourPackage }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  console.log("tourPackage_slide", tourPackage);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  {
  }
  
  const unsplashPhotos = [];
  let indice = 0;
  tourPackage.map((x) => {
    unsplashPhotos.push({
      src: x.imgPath,
      width: size[indice].width,
      height: size[indice].height,
    });
    indice++;
  });
  while (unsplashPhotos.length < 5) {
    unsplashPhotos.push({
      src: config.assetImg(config.images.logo),
      width: size[indice].width,
      height: size[indice].height,
    });
    indice++;
  }
  const photos = unsplashPhotos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));
  console.log("unsplashPhotos", unsplashPhotos);
  return (
    <Box>
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
                    className="imageSlider"
                    src={step.imgPath}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>

        <Grid className="displayGallery">
          <Gallery margin={10}  photos={photos} layout="masonry" />
        </Grid>
      </Grid>
    </Box>

    // Anterior widgets
  );
};

const size = [
  {
    width: 250,
    height: 100,
  },
  {
    width: 1080,
    height: 1620,
  },
  {
    width: 1080,
    height: 720,
  },
  {
    width: 1080,
    height:721,
  },
  {
    width: 1080,
    height: 1620,

  },
 
];
