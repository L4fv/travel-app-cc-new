import * as React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { config } from "../../config";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { TourCardReserva } from "../../components/tourPackages/CardReserva";
import {
  getOfferRate,
  getRemainingOfferDays,
  hasActiveOffer,
} from "../../utils/product";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const TourPackageFooter = ({ tourPackage,mp }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const hasOffer = hasActiveOffer(tourPackage);

  return (
    <div >
      <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
        <div className="text-center ">
          <div className="inline-flex  py-1 text-black rounded-full">
            <div>
              {hasOffer && (
                <span className="line-through">S/.{tourPackage.price}</span>
              )}{" "}
              <span style={{color:"#222222",fontSize:"18px",fontWeight:"bold",paddingRight:"5px"}}>
              S/.
              {hasOffer ? tourPackage.offer.price : tourPackage.price}
              </span>
              <span style={{color:"#222222",fontSize:"12px"}}>
               /persona
              </span>
              {hasOffer && (
                <span className="text-white mt-1 font-bold">
                  {" "}
                  (-{getOfferRate(tourPackage)}%)
                </span>
              )}
            </div>
          </div>
        </div>
        <Button variant="contained" onClick={handleClickOpen} style={{
          backgroundColor: config.colors.primary.DEFAULT,
        
        }}>
          Reserva
        </Button>
      </Grid >
      <Grid >
        <Dialog
          
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
         
          <Grid  sx={{ display: "flex", justifyContent: "center"}}>
                <TourCardReserva tourPackage={tourPackage} mp={mp} />
          </Grid>{" "}
        </Dialog>
      </Grid>
    </div>
  );
};
