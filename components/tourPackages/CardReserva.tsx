import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import addDays from "date-fns/addDays";

import { es } from "date-fns/locale";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

import { TourPackageContact } from "../../components/tourPackages/Contact";

export const TourCardReserva = ({ tourPackage, mp }) => {
  const [llegada, setValueLlegada] = useState<Date | null>(new Date());
  const [selectedDayFrom, setSelectedDayFrom] = useState<Date | null>(
    new Date()
  );
  const [selectedDayTo, setSelectedDayTo] = useState<Date | null>();

  const [peopleQuantity, setPeopleQuantity] = useState<number>(2);
  const handleChange = (event: any) => {
    setPeopleQuantity(event.target.value);
  };

  useEffect(() => {    
    setSelectedDayTo(addDays(selectedDayFrom, tourPackage.duration));
  }, [selectedDayFrom]);

  const listPersons = [];
  for (let index = tourPackage.capacity.min; index <= 10; index++) {
    listPersons.push({ value: index, label: `${index} Personas` });
  }
  const [isPriceItem, setIsPriceItem] = useState<number>(
    parseInt(listPersons[0].value)
  );

  useEffect(() => {
    console.log("peopleQuantity ", typeof peopleQuantity, peopleQuantity);
    setIsPriceItem(peopleQuantity * parseInt(tourPackage.price));
  }, [peopleQuantity]);

  return (
    <Card
      sx={{
        maxWidth: "480px",
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: "12px",
        boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
      }}
    >
      <CardContent className="paddingCard">
        <Typography variant="h5" component="div">
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <p className="font-thin	">
                <span className="font-semibold">
                  S/. {tourPackage.price.toFixed(2)}
                </span>{" "}
                / persona
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider locale={es} dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Llegada"
                  inputFormat="dd/MM/yyyy"
                  value={llegada}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setValueLlegada(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField className="buttomDate" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  value={
                    llegada
                      ? addDays(new Date(llegada), tourPackage.duration)
                      : null
                  }
                  label="Salida"
                  onChange={null}
                  disabled
                  renderInput={(params) => (
                    <TextField className="buttomDate" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%", textAlign: "start" }}
                id="outlined-select-currency"
                select
                label="Numero de Personas"
                value={peopleQuantity}
                onChange={handleChange}
              >
                {listPersons.map((x) => (
                  <MenuItem key={x.value} value={x.value}>
                    {x.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid sx={{ paddingTop: "10px" }} xs={12}>
            <Typography>
              <TourPackageContact
                isPriceItem={isPriceItem}
                tourPackage={tourPackage}
                rangeFrom={selectedDayFrom}
                rangeTo={selectedDayTo}
                quantity={peopleQuantity}
                mp={mp}
              />
            </Typography>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
};
