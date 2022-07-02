import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TourPackageDetails = ({ tourPackage }) => {
  console.log("tourPackageDetails", tourPackage);
  const description = tourPackage.details[0].description;
  const initPoint = tourPackage.details[1].description;
  const itinerario = tourPackage.details[2].description;
  const actividades = tourPackage.details[3].description;
  const noIncluye = tourPackage.details[4].description;
  const notas = tourPackage.details[5].description;
  console.log("description", description);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
         textColor="secondary"
         indicatorColor="secondary"
          value={value}
          onChange={handleChange}
         
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          <Tab label="Incluye" {...a11yProps(0)} />
          <Tab label="Punto de Partida" {...a11yProps(1)} />
          <Tab label="Itinerario" {...a11yProps(2)} />
          <Tab label="Actividades" {...a11yProps(3)} />
          <Tab label="No Incluye" {...a11yProps(4)} />
          <Tab label="Notas" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={1}>
          {" "}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={1}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: initPoint,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={1}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: itinerario,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={1}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: actividades,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={1}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: noIncluye,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className=" mb-2"></div>
        <Grid container spacing={1}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
            }}
            item
            xs={12}
            md={12}
          >
            <div
              className="prose overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: notas,
              }}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </Box>

    //   <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
    //   <Tab label="Incluye" />
    //   <Tab label="Punto de Partida" />
    //   <Tab label="Itinerario" />
    //   <Tab label="Actividades" />
    //   <Tab label="No Incluye" />
    //   <Tab label="Notas" />
    // </Tabs>
    // <div>
    //   <div>
    //     <h1 className="titleBody">Incluye</h1>
    //   </div>

    //   <div className=" mb-2"></div>

    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: description,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>

    //   <div>
    //     <h1 className="titleBody">Punto de Partida</h1>
    //   </div>
    //   <div className=" mb-2"></div>

    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: initPoint,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>

    //   <div>
    //     <h1 className="titleBody">Itinerario</h1>
    //   </div>
    //   <div className=" mb-2"></div>

    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: itinerario,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>

    //   <div>
    //     <h1 className="titleBody">Actividades</h1>
    //   </div>
    //   <div className=" mb-2"></div>

    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: actividades,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>

    //   <div>
    //     <h1 className="titleBody">No Incluye</h1>
    //   </div>
    //   <div className=" mb-2"></div>

    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: noIncluye,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>

    //   <div>
    //     <h1 className="titleBody">Notas</h1>
    //   </div>
    //   <div className=" mb-2"></div>
    //   <Grid container spacing={1}>
    //     <Grid
    //       sx={{
    //         display: "flex",
    //         justifyContent: "start",
    //         textAlign: "start",
    //       }}
    //       item
    //       xs={12}
    //       md={12}
    //     >
    //       <div
    //         className="prose overflow-hidden"
    //         dangerouslySetInnerHTML={{
    //           __html: notas,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>
    // </div>
  );
};
