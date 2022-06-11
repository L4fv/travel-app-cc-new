import * as React from "react";
import { render } from "react-dom";
import { useState, useEffect } from "react";
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
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { es } from "date-fns/locale"
import {
  getOfferRate,
  getRemainingOfferDays,
  hasActiveOffer,
} from "../../utils/product";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { TourPackageContact } from "../../components/tourPackages/Contact";
import { mdiMargin } from "@mdi/js";



export const TourCardReserva = ({ tourPackage, mp }) => {
  const hasOffer = hasActiveOffer(tourPackage);
  const [llegada, setValueLlegada] = React.useState<Date | null>(null);
  const [age, setAge] = React.useState("");
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const [peopleQuantity, setPeopleQuantity] = useState(tourPackage || 1);
  const handleChange = (event: SelectChangeEvent) => {
    setPeopleQuantity(event.target.value as string);
  };
  const listPersons = [];
  for (let index = tourPackage.capacity.min; index <= 10; index++) {
    listPersons.push(index);
  }
  return (
    <div>
      <Card>
        <CardContent className="paddingCard">
          <Typography variant="h5" component="div">
            <Grid>
              <Grid className="timeClass">
                <LocalizationProvider
            
                  locale={es}
                  dateAdapter={AdapterDateFns}
                >
                  <DatePicker
                    label="Llegada"
                    inputFormat="dd/MM/yyyy"
                    value={llegada}
                    onChange={(newValue) => {
                      setValueLlegada(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField className="buttomDate" {...params} />
                    )}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    value={
                      llegada
                        ? addDays(new Date(llegada), tourPackage.duration + 1)
                        : null
                    }
                    label="Salida"
                    disabled
                    renderInput={(params) => (
                      <TextField className="buttomDate" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ margin: "20px 0px", maxWidth: "350px", width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel block id="demo-simple-select-label">
                  Cantidad de Personas
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={2}
                  value={peopleQuantity}
                  onChange={handleChange}
                >
                  {listPersons.map((x) => (
                    <MenuItem value={x}>{x}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Typography>
          <Typography>
            <TourPackageContact
              tourPackage={tourPackage}
              range={selectedDayRange}
              quantity={peopleQuantity}
              mp={mp}
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
