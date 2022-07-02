
//import Gallery from "react-photo-gallery-next";
import dynamic from 'next/dynamic'

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";

const Gallery = dynamic(() => import('react-photo-gallery-next'), {  // no ssr
  ssr: false
})
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
                ) : ""}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>

        <Grid className="displayGallery">
          <Gallery
            photos={photos}
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
