import { useState, useEffect } from "react";
import { mdiWhatsapp, mdiCreditCardOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { config } from "../../config";
import axios from "axios";

import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DefaultForm from "../../utils/model";

export const TourPackageContact = ({ tourPackage, range, quantity, mp }) => {
  let message = `Buen día. Quisiera reservar el paquete *${tourPackage.name}* para ${quantity} personas `;
  const [open, setOpen] = useState(false);
  const [isLoadingMp, setLoading] = useState(false);
  const [isFormInitial, setFormInitial] = useState(false);

  const [bodyForm, setBodyForm] = useState(DefaultForm.formReservation());
  const [errorForm, setErrorForm] = useState(DefaultForm.errorReservation());

  const setBodyFormChange = (e, name, type, isRequired) => {
    let value = e.target.value;
    setFormInitial(true);

    switch (type) {
      case 2:
        value = !bodyForm[name];
        break;
      default:
        break;
    }
    if (isRequired && value) {
      setErrorForm({
        ...errorForm,
        [name]: !value ? true : false,
      });
    }

    setBodyForm({
      ...bodyForm,
      [name]: value,
    });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setBodyForm(DefaultForm.formReservation());
    setOpen(false);
    setLoading(false);
    setFormInitial(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("errorForm ", Object.values(errorForm));
    const listError = Object.values(errorForm);
    const isOk = listError.filter((x) => x);
    console.log("isOk ", isOk);
    if (isOk.length < 1) {
      setFormInitial(false);
      //console.log("env ", api);
      const { data } = await axios({
        url: "/customer/tour-packages/payment",
        baseURL: process.env.NEXT_PUBLIC_API_URL_EXT,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          documentInvoice: bodyForm.checked
            ? bodyForm.documentInvoice
            : bodyForm.documentReservation,
          fullNameInvoice: bodyForm.checked
            ? bodyForm.fullNameInvoice
            : bodyForm.fullName,
          addressInvoice: bodyForm.checked ? bodyForm.addressInvoice : "",
          //price: tourPackage.price,
          price: 10,
          title: tourPackage.name,
          mail: bodyForm.mail,
          phoneNumber: bodyForm.phoneNumber,
          numberAttendees: quantity,
          documentReservation: bodyForm.documentReservation,
          fullName: bodyForm.fullName,
          observation: bodyForm.observation,
        },
      });
      console.log("data ", data);
      console.log("mp", mp);
      // Inicializa el checkout
      mp.checkout({
        preference: {
          id: data.data.id,
        },
        autoOpen: true,
        theme: {
          elementsColor: "#4fce5d",
          headerColor: "#4fce5d",
        },
      });
    } else {
      setFormInitial(true);
      //alert("Hay errores");
    }
    setLoading(false);
  };

  if (range.from && range.to) {
    const from = format(
      new Date(2022, range.from.month - 1, range.from.day),
      "d 'de' LLLL",
      { locale: es }
    );
    const to = format(
      new Date(2022, range.to.month - 1, range.to.day),
      "d 'de' LLLL",
      { locale: es }
    );

    message += `desde el *${from}* ` + `hasta el *${to}*`;
  }

  const encoded = encodeURIComponent(message);
  return (
    <div className="text-center mb-8">
      <Button
        variant="contained"
        onClick={handleOpenModal}
        className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
        style={{ backgroundColor: "blue", margin: 8 }}
        startIcon={<Icon path={mdiCreditCardOutline} size={1.5} />}
      >
        Reserva Online
      </Button>
      <Button
        variant="contained"
        href={`https://wa.me/${config.contactPhone}?text=${encoded}`}
        className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
        style={{ backgroundColor: "#4fce5d", margin: 8 }}
        startIcon={<Icon path={mdiWhatsapp} size={1.5} />}
      >
        <span>Reserva WHATSAPP</span>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown={true}
        scroll={"body"}
        aria-labelledby="confirmation-dialog-title"

        //aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="confirmation-dialog-title">
            Datos de Reserva
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={bodyForm["documentReservation"]}
                  error={errorForm["documentReservation"]}
                  autoFocus
                  margin="dense"
                  label="Número de DNI*"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  type="numeric"
                  fullWidth
                  variant="standard"
                  onChange={(e) =>
                    setBodyFormChange(e, "documentReservation", 1, true)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errorForm["fullName"]}
                  value={bodyForm["fullName"]}
                  margin="dense"
                  label="Nombres completos*"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setBodyFormChange(e, "fullName", 1, true)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  error={errorForm["mail"]}
                  value={bodyForm["mail"]}
                  margin="dense"
                  label="Email*"
                  type="email"
                  fullWidth
                  variant="standard"
                  //  inputProps={{ inputMode: 'email', pattern: '.+@globex\.com' }}
                  onChange={(e) => setBodyFormChange(e, "mail", 1, true)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errorForm["phoneNumber"]}
                  value={bodyForm["phoneNumber"]}
                  margin="dense"
                  label="Telefono"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  fullWidth
                  variant="standard"
                  onChange={(e) => setBodyFormChange(e, "phoneNumber", 1, true)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={bodyForm["observation"]}
                  margin="dense"
                  label="Información Adicional"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e) => setBodyFormChange(e, "observation", 1, true)}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={bodyForm["checked"]}
                      onChange={(e) => setBodyFormChange(e, "checked", 2, true)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="¿Desea que se le envíe una factura?"
                />
              </Grid>
              <Snackbar
                open={isFormInitial}
                autoHideDuration={3000}
                message="Hay errores en los datos"
                onClose={() => setFormInitial(false)}
              />

              {bodyForm["checked"] ? (
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={bodyForm["documentInvoice"]}
                      error={errorForm["documentInvoice"]}
                      margin="dense"
                      label="Número de RUC*"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="numeric"
                      fullWidth
                      variant="standard"
                      onChange={(e) =>
                        setBodyFormChange(e, "documentInvoice", 1, true)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={errorForm["fullNameInvoice"]}
                      value={bodyForm["fullNameInvoice"]}
                      margin="dense"
                      label="Razon Social*"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={(e) =>
                        setBodyFormChange(e, "fullNameInvoice", 1, true)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={errorForm["addressInvoice"]}
                      value={bodyForm["addressInvoice"]}
                      margin="dense"
                      label="Dirección de facturación*"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={(e) =>
                        setBodyFormChange(e, "addressInvoice", 1, true)
                      }
                    />
                  </Grid>
                </Grid>
              ) : (
                <div></div>
              )}
              {/* ------------ */}
            </Grid>
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ color: "blue" }}>
              Atras
            </Button>
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "blue" }}
              disabled={isLoadingMp}
            >
              Lo quiero S/.{tourPackage.price}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
