import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export const TourPackageDetails = ({ tourPackage }) => {
  console.log("tourPackageDetails", tourPackage);
  const description = tourPackage.details[0].description;
  const initPoint = tourPackage.details[1].description;
  const itinerario = tourPackage.details[2].description;
  const actividades = tourPackage.details[3].description;
  const noIncluye = tourPackage.details[4].description;
  const notas = tourPackage.details[5].description;
  console.log("description", description);

  return (
    <div>
      <div>
        <h1 className="titleBody">Incluye</h1>
      </div>

      <div className=" mb-2"></div>

      <Grid container spacing={1}>
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

      <div>
        <h1 className="titleBody">Punto de Partida</h1>
      </div>
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
              __html: initPoint,
            }}
          />
        </Grid>
      </Grid>

      <div>
        <h1 className="titleBody">Itinerario</h1>
      </div>
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
              __html: itinerario,
            }}
          />
        </Grid>
      </Grid>

      <div>
        <h1 className="titleBody">Actividades</h1>
      </div>
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
              __html: actividades,
            }}
          />
        </Grid>
      </Grid>

      <div>
        <h1 className="titleBody">No Incluye</h1>
      </div>
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
              __html: noIncluye,
            }}
          />
        </Grid>
      </Grid>

      <div>
        <h1 className="titleBody">Notas</h1>
      </div>
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
    </div>
  );
};
