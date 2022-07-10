import { useState, useEffect } from "react";
import { mdiWhatsapp, mdiCreditCardOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { config } from "../../config";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import DefaultForm from "../../utils/model";
export const TourPackageContact = ({
  tourPackage,
  rangeFrom,
  rangeTo,
  quantity,
  isPriceItem,
  mp,
}) => {
  let [newPriceItem, setNewPriceItem] = React.useState(isPriceItem);
  
  console.log("rangeFrom ",rangeFrom, "rangeTo ", rangeTo)
  let message = `Buen día. Quisiera reservar el paquete *${tourPackage.name}* para ${quantity} personas `;
  const [open, setOpen] = useState(false);

  const [isLoadingMp, setLoading] = useState(false);
  const validationSchema = yup.object({
    fullName: yup.string().required("Nombres es requerido"),
    fullNameInvoice: yup.string(),
    documentInvoice: yup.string().min(11).max(11),
    addressInvoice: yup.string(),
    observation: yup.string(),
    checked: yup.boolean(),
    isPercent: yup.boolean(),
    documentReservation: yup
      .string()
      .min(8)
      .max(8)
      .required("Documento es requerido"),
    mail: yup
      .string()
      .email("Invalid email format")
      .required("Email es requerido"),
    phoneNumber: yup.number(),
  });

  const formik = useFormik({
    initialValues: DefaultForm.formReservation(),
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  /* event.preventDefault(); */
  useEffect(() => {
    if(formik.values.isPercent){
      setNewPriceItem((isPriceItem * 50) / 100);
    }else{
      setNewPriceItem(isPriceItem );
    }
    
  }, [formik.values.isPercent, isPriceItem]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
    setLoading(false);
  };
  const handleSubmit = async (v) => {
    // event.preventDefault();
    setLoading(true);
    //console.log("env ", api);
    const { data } = await axios({
      url: "/customer/tour-packages/payment",
      baseURL: process.env.NEXT_PUBLIC_API_URL_EXT,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        documentInvoice: v.checked ? v.documentInvoice : v.documentReservation,
        fullNameInvoice: v.checked ? v.fullNameInvoice : v.fullName,
        addressInvoice: v.checked ? v.addressInvoice : "",
        price: newPriceItem,        
        title: tourPackage.name,
        mail: v.mail,
        phoneNumber: v.phoneNumber,
        numberAttendees: quantity,
        documentReservation: v.documentReservation,
        fullName: v.fullName,
        observation: v.observation,
        origen: config.domain,
        titleMail: config.name,
        brand: config.brand,
        rangeFrom: rangeFrom,
        rangeTo: rangeTo,
        totalPrice: isPriceItem,
        isPercent: v.isPercent,
      },
    });
    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: data.data.mpReference,
      },
      autoOpen: true,
    });
    setLoading(false);
  };

  const encoded = encodeURIComponent(message);
  return (
    <div className="text-center ">
      <Button
        variant="contained"
        //disabled={!rangeFrom || !quantity}
        onClick={handleOpenModal}
        className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
        style={{
          backgroundColor: "#03A691",
          padding: "0.8rem 3rem",
          borderColor: config.colors.primary.DEFAULT,
        }}
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
      <p className="text-lg font-semibold">TOTAL S/{isPriceItem.toFixed(2)}</p>
      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown={true}
        scroll={"body"}
        aria-labelledby="confirmation-dialog-title"

        //aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="confirmation-dialog-title">
            Datos de Reserva
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="documentReservation"
                  value={formik.values.documentReservation}
                  autoFocus
                  margin="dense"
                  label="Número de DNI*"
                  type="numeric"
                  fullWidth
                  error={
                    formik.touched.documentReservation &&
                    Boolean(formik.errors.documentReservation)
                  }
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.documentReservation &&
                    formik.errors.documentReservation
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="fullName"
                  value={formik.values.fullName}
                  margin="dense"
                  label="Nombres completos*"
                  fullWidth
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  onChange={formik.handleChange}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="mail"
                  value={formik.values.mail}
                  margin="dense"
                  label="Email*"
                  type="email"
                  fullWidth
                  error={formik.touched.mail && Boolean(formik.errors.mail)}
                  onChange={formik.handleChange}
                  helperText={formik.touched.mail && formik.errors.mail}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phoneNumber"
                  value={formik.values.phoneNumber}
                  margin="dense"
                  label="Telefono"
                  fullWidth
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="observation"
                  value={formik.values.observation}
                  margin="dense"
                  label="Información Adicional"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.observation &&
                    Boolean(formik.errors.observation)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="checked"
                      checked={formik.values.checked}
                      onChange={formik.handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Quiero que me envién una factura"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isPercent"
                      checked={formik.values.isPercent}
                      onChange={formik.handleChange}                      
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Quiero Reservar con el 50% del total"
                />
              </Grid>

              {formik.values.checked ? (
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="documentInvoice"
                      value={formik.values.documentInvoice}
                      margin="dense"
                      label="Número de RUC*"
                      fullWidth
                      error={
                        formik.touched.documentInvoice &&
                        Boolean(formik.errors.documentInvoice)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="fullNameInvoice"
                      value={formik.values.fullNameInvoice}
                      margin="dense"
                      label="Razon Social*"
                      fullWidth
                      error={
                        formik.touched.fullNameInvoice &&
                        Boolean(formik.errors.fullNameInvoice)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="addressInvoice"
                      value={formik.values.addressInvoice}
                      margin="dense"
                      label="Dirección de facturación*"
                      fullWidth
                      error={
                        formik.touched.addressInvoice &&
                        Boolean(formik.errors.addressInvoice)
                      }
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
              ) : (
                <div></div>
              )}

            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ color: config.colors.primary.DEFAULT }}
            >
              Atras
            </Button>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: config.colors.primary.DEFAULT,
                margin: 8,
                borderColor: config.colors.primary.DEFAULT,
              }}
              disabled={isLoadingMp}
            >
              Lo quiero S/. {newPriceItem.toFixed(2)}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
