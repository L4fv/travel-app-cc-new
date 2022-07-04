import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import addDays from "date-fns/addDays";
import Box from "@mui/material/Box";

import { es } from "date-fns/locale";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { TourPackageContact } from "../../components/tourPackages/Contact";
import { textAlign } from "@mui/system";

export const TourCardReserva = ({ tourPackage, mp }) => {
  const [llegada, setValueLlegada] = useState<Date | null>("");
  const [selectedDayFrom, setSelectedDayFrom] = useState<Date | null>("");
  const [selectedDayTo, setSelectedDayTo] = useState<Date | null>("");

  const [peopleQuantity, setPeopleQuantity] = useState<number>(2);
  const handleChange = (event: any) => {
    setPeopleQuantity(event.target.value);
  };
  const DayFromTo = (event: any) => {
    console.log("event", event);
    console.log("tpye", typeof event);
    setSelectedDayFrom(event);
    setSelectedDayTo(addDays(new Date(event), tourPackage.duration + 1));
  };

  const listPersons = [];
  for (let index = tourPackage.capacity.min; index <= 10; index++) {
    listPersons.push({ value: index, label: `${index} Personas` });
  }
  const [isPriceItem, setIsPriceItem] = useState(
    parseInt(listPersons[0].value)
  );

  useEffect(() => {
    console.log("peopleQuantity ", typeof peopleQuantity, peopleQuantity);
    setIsPriceItem(parseInt(peopleQuantity) * tourPackage.price);
  }, [peopleQuantity]);

  return (
    <div >
      <Card sx={{display:"flex",justifyContent:"center"}}>
        <CardContent className="paddingCard">
          <Typography variant="h5" component="div">
            <Grid container spacing={2} sx={{textAlign:"center"}}>
              <Grid item xs={12}>
                {" "}
                <Box sx={{ fontWeight: "bold" }}>
                  S/. {isPriceItem.toFixed(2)}
                </Box>
              </Grid>

              <Grid item xs={12}>
                {" "}
                <LocalizationProvider locale={es} dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Llegada"
                    inputFormat="dd/MM/yyyy"
                    value={llegada}
                    minDate={new Date()}
                    onChange={(newValue) => {
                      setValueLlegada(newValue);
                      DayFromTo(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField className="buttomDate" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                {" "}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    value={
                      llegada
                        ? addDays(new Date(llegada), tourPackage.duration + 1)
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
                {" "}
                <TextField
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
            <Grid  xs={12}>
              <Typography>
                <TourPackageContact
                  tourPackage={tourPackage}
                  rangeFrom={selectedDayFrom}
                  rangeTo={selectedDayTo}
                  quantity={peopleQuantity}
                  mp={mp}
                />
              </Typography>
            </Grid>
            {/* <Grid>
              <Grid sx={{ py: 2, textAlign: "center" }}>
                <Box sx={{ fontWeight: "bold" }}>
                  S/. {isPriceItem.toFixed(2)}
                </Box>
              </Grid>
              <Grid className="flex justify-center">
                <Grid xs={6}>
                  <LocalizationProvider
                    locale={es}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      label="Llegada"
                      inputFormat="dd/MM/yyyy"
                      value={llegada}
                      minDate={new Date()}
                      onChange={(newValue) => {
                        setValueLlegada(newValue);
                        DayFromTo(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField className="buttomDate" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      inputFormat="dd/MM/yyyy"
                      value={
                        llegada
                          ? addDays(new Date(llegada), tourPackage.duration + 1)
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
              </Grid>
            </Grid> */}
          </Typography>
          {/* <Typography
            color="text.secondary"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ margin: "20px 0px" }}>
              <TextField
                id="outlined-select-currency"
                select
                label="Numero de Personas"
                value={peopleQuantity}
                onChange={handleChange}
                helperText="Por favor seleccione una cantidad de Personas"
              >
                {listPersons.map((x) => (
                  <MenuItem key={x.value} value={x.value}>
                    {x.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Typography> */}
          {/* <Typography>
            <TourPackageContact
              tourPackage={tourPackage}
              rangeFrom={selectedDayFrom}
              rangeTo={selectedDayTo}
              quantity={peopleQuantity}
              mp={mp}
            />
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};
