import { useState } from "react";

import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Router, { useRouter } from "next/router";

import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const TourPackageDetails = ({ tourPackage }) => {

  const formatHtml = (payload) => {
    const liReplace = new RegExp("<li><br></li>", "g");
    const pReplace = new RegExp("<p><br></p>", "g");
    const firstReplace = payload.replace(liReplace, "");
    const secondReplace = firstReplace.replace(pReplace, "");
    return secondReplace;
  };

  const textToString = (payload) => {
    const liReplace = new RegExp(" ", "g");
    return payload.replace(liReplace, "_");
  };

  return (
    <Grid container item xs={12} >
      <Grid className="" sx={{ padding: "16px 0" }}>
        {tourPackage.details.map(
          (x, index) =>
            x.description && (
              <Chip
              key={index}
                label={x.title.toUpperCase()}
                variant="outlined"
                className="mx-2 my-2"
                clickable 
                component="a"
                href={`#${textToString(x.title)}`}
              />
            )
        )}
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {tourPackage.details.map(
          (x, index) =>
            x.description && (
              <Grid className="content-information" id={textToString(x.title)} key={index}>
                <Grid className="" sx={{ padding: "8px 0" }}>
                  <span className="text-2xl font-bold">
                    {x.title.toUpperCase()}
                  </span>
                </Grid>
                <Grid>
                  <Grid container spacing={1}>
                    <Grid container sx={{ padding: "8px" }} item xs={12} md={12}>
                      <Grid
                        className="break-words prose overflow-hidden"
                        dangerouslySetInnerHTML={{
                          __html: formatHtml(x.description),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )
        )}
      </Box>
    </Grid>
  );
};
