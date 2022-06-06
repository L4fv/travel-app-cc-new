import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TourPackageCalendar } from "../../components/tourPackages/Calendar";
import { TourPackageCapacity } from "../../components/tourPackages/Capacity";
import { TourPackageContact } from "../../components/tourPackages/Contact";
import { useState } from "react";
import {
    getOfferRate,
    getRemainingOfferDays,
    hasActiveOffer,
  } from "../../utils/product";


export const Sticky = ({ tourPackage }) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpenStep2] = React.useState(false);
  const [mp, setMercadoPago] = useState({});
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  console.log("Sticky tourPackage+++++++++++", tourPackage);
  const hasOffer = hasActiveOffer(tourPackage);
  const [peopleQuantity, setPeopleQuantity] = useState(tourPackage || 1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenStep2 = () => {
    setOpen(false);
    setOpenStep2(true);
  };
  const handleCloseStep2 = () => {
    setOpen(false);
    setOpenStep2(false);
  };
  return (
    <div className="footerSticky  ">
      <Button variant="outlined" onClick={handleClickOpen}>
        Hacer mi reserva
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="headerCalendar inline-flex justify-center py-6">
            <div className="inline-flex px-8 py-2 bg-secondary text-white rounded-full shadow-lg">
              {tourPackage.duration + 1} días / {tourPackage.duration} noches
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TourPackageCalendar
              tourPackage={tourPackage}
              range={selectedDayRange}
              handleChange={setSelectedDayRange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancelar</Button>
          <Button onClick={handleOpenStep2} autoFocus>
            continuar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleCloseStep2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <div className=" headerCalendar text-center mt-4 md:mt-12 mb-6">
                      <div className="inline-flex px-8 py-2 bg-tertiary text-white rounded-full shadow-lg">
                        <div>
                          {hasOffer && (
                            <span className="line-through">
                              S/.{tourPackage.price}
                            </span>
                          )}{" "}
                          S/.
                          {hasOffer
                            ? tourPackage.offer.price
                            : tourPackage.price}{" "}
                          por persona
                          {hasOffer && (
                            <span className="text-white mt-1 font-bold">
                              {" "}
                              (-{getOfferRate(tourPackage)}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
        </DialogTitle>
        <DialogContent sx={{  overflowY: "hidden"}}>
          <DialogContentText  id="alert-dialog-description">
          <TourPackageCapacity
                      defaultCapacity={tourPackage.capacity.min}
                      min={tourPackage.capacity.min}
                      max={tourPackage.capacity.max}
                      onChange={setPeopleQuantity}
                    />
                    <div className="text-center my-4">
                      <div>TOTAL</div>
                      {hasOffer && (
                        <div className="text-gray-400 line-through">
                          S/.{tourPackage.price * peopleQuantity}
                        </div>
                      )}
                      <div className="text-primary font-bold text-xl">
                        {hasOffer && "Oferta: "}
                        S/.
                        {(hasOffer
                          ? tourPackage.offer.price
                          : tourPackage.price) * peopleQuantity}
                      </div>
                      {hasOffer && (
                        <p className="text-red-500">
                          La oferta termina en{" "}
                          {getRemainingOfferDays(tourPackage)}.
                        </p>
                      )}
                    </div>
                    <div>
                    <TourPackageContact
                      tourPackage={tourPackage}
                      range={selectedDayRange}
                      quantity={peopleQuantity}
                      mp={mp}
                    />
                    </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseStep2}>cancelar</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
};
