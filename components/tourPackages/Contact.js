"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourPackageContact = void 0;
var react_1 = require("react");
var js_1 = require("@mdi/js");
var react_2 = __importDefault(require("@mdi/react"));
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var config_1 = require("../../config");
var axios_1 = __importDefault(require("axios"));
var Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var model_1 = __importDefault(require("../../utils/model"));
var TourPackageContact = function (_a) {
    var tourPackage = _a.tourPackage, range = _a.range, quantity = _a.quantity, mp = _a.mp;
    var message = "Buen d\u00EDa. Quisiera reservar el paquete *".concat(tourPackage.name, "* para ").concat(quantity, " personas ");
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(false), isLoadingMp = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(false), isFormInitial = _d[0], setFormInitial = _d[1];
    var _e = (0, react_1.useState)(model_1.default.formReservation()), bodyForm = _e[0], setBodyForm = _e[1];
    var _f = (0, react_1.useState)(model_1.default.errorReservation()), errorForm = _f[0], setErrorForm = _f[1];
    var setBodyFormChange = function (e, name, type, isRequired) {
        var _a, _b;
        var value = e.target.value;
        setFormInitial(true);
        switch (type) {
            case 2:
                value = !bodyForm[name];
                break;
            default:
                break;
        }
        if (isRequired && value) {
            setErrorForm(__assign(__assign({}, errorForm), (_a = {}, _a[name] = !value ? true : false, _a)));
        }
        setBodyForm(__assign(__assign({}, bodyForm), (_b = {}, _b[name] = value, _b)));
    };
    var handleOpenModal = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setBodyForm(model_1.default.formReservation());
        setOpen(false);
        setLoading(false);
        setFormInitial(false);
    };
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var listError, isOk, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setLoading(true);
                    console.log("errorForm ", Object.values(errorForm));
                    listError = Object.values(errorForm);
                    isOk = listError.filter(function (x) { return x; });
                    console.log("isOk ", isOk);
                    if (!(isOk.length < 1)) return [3 /*break*/, 2];
                    setFormInitial(false);
                    return [4 /*yield*/, (0, axios_1.default)({
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
                        })];
                case 1:
                    data = (_a.sent()).data;
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
                    return [3 /*break*/, 3];
                case 2:
                    setFormInitial(true);
                    _a.label = 3;
                case 3:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    if (range.from && range.to) {
        var from = (0, date_fns_1.format)(new Date(2022, range.from.month - 1, range.from.day), "d 'de' LLLL", { locale: locale_1.es });
        var to = (0, date_fns_1.format)(new Date(2022, range.to.month - 1, range.to.day), "d 'de' LLLL", { locale: locale_1.es });
        message += "desde el *".concat(from, "* ") + "hasta el *".concat(to, "*");
    }
    var encoded = encodeURIComponent(message);
    return (<div className="text-center mb-8">
      <Button_1.default variant="contained" onClick={handleOpenModal} className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl" style={{ backgroundColor: "blue", margin: 8 }} startIcon={<react_2.default path={js_1.mdiCreditCardOutline} size={1.5}/>}>
        Reserva Online
      </Button_1.default>
      <Button_1.default variant="contained" href={"https://wa.me/".concat(config_1.config.contactPhone, "?text=").concat(encoded)} className="inline-flex items-center  text-md px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl" style={{ backgroundColor: "#4fce5d", margin: 8 }} startIcon={<react_2.default path={js_1.mdiWhatsapp} size={1.5}/>}>
        <span>Reserva WHATSAPP</span>
      </Button_1.default>

      <Dialog_1.default open={open} onClose={handleClose} disableEscapeKeyDown={true} scroll={"body"} aria-labelledby="confirmation-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle_1.default id="confirmation-dialog-title">
            Datos de Reserva
          </DialogTitle_1.default>
          <DialogContent_1.default dividers>
            <Grid_1.default container spacing={1}>
              <Grid_1.default item xs={12} sm={6}>
                <TextField_1.default value={bodyForm["documentReservation"]} error={errorForm["documentReservation"]} autoFocus margin="dense" label="Número de DNI*" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} type="numeric" fullWidth variant="standard" onChange={function (e) {
            return setBodyFormChange(e, "documentReservation", 1, true);
        }}/>
              </Grid_1.default>
              <Grid_1.default item xs={12} sm={6}>
                <TextField_1.default error={errorForm["fullName"]} value={bodyForm["fullName"]} margin="dense" label="Nombres completos*" type="text" fullWidth variant="standard" onChange={function (e) { return setBodyFormChange(e, "fullName", 1, true); }}/>
              </Grid_1.default>

              <Grid_1.default item xs={12} sm={6}>
                <TextField_1.default error={errorForm["mail"]} value={bodyForm["mail"]} margin="dense" label="Email*" type="email" fullWidth variant="standard" 
    //  inputProps={{ inputMode: 'email', pattern: '.+@globex\.com' }}
    onChange={function (e) { return setBodyFormChange(e, "mail", 1, true); }}/>
              </Grid_1.default>
              <Grid_1.default item xs={12} sm={6}>
                <TextField_1.default error={errorForm["phoneNumber"]} value={bodyForm["phoneNumber"]} margin="dense" label="Telefono" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} fullWidth variant="standard" onChange={function (e) { return setBodyFormChange(e, "phoneNumber", 1, true); }}/>
              </Grid_1.default>
              <Grid_1.default item xs={12}>
                <TextField_1.default value={bodyForm["observation"]} margin="dense" label="Información Adicional" type="text" fullWidth multiline rows={4} onChange={function (e) { return setBodyFormChange(e, "observation", 1, true); }} variant="standard"/>
              </Grid_1.default>
              <Grid_1.default item xs={12}>
                <FormControlLabel_1.default control={<Checkbox_1.default checked={bodyForm["checked"]} onChange={function (e) { return setBodyFormChange(e, "checked", 2, true); }} inputProps={{ "aria-label": "controlled" }}/>} label="¿Desea que se le envíe una factura?"/>
              </Grid_1.default>
              <Snackbar_1.default open={isFormInitial} autoHideDuration={3000} message="Hay errores en los datos" onClose={function () { return setFormInitial(false); }}/>

              {bodyForm["checked"] ? (<Grid_1.default container spacing={1}>
                  <Grid_1.default item xs={12} sm={6}>
                    <TextField_1.default value={bodyForm["documentInvoice"]} error={errorForm["documentInvoice"]} margin="dense" label="Número de RUC*" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} type="numeric" fullWidth variant="standard" onChange={function (e) {
                return setBodyFormChange(e, "documentInvoice", 1, true);
            }}/>
                  </Grid_1.default>
                  <Grid_1.default item xs={12} sm={6}>
                    <TextField_1.default error={errorForm["fullNameInvoice"]} value={bodyForm["fullNameInvoice"]} margin="dense" label="Razon Social*" type="text" fullWidth variant="standard" onChange={function (e) {
                return setBodyFormChange(e, "fullNameInvoice", 1, true);
            }}/>
                  </Grid_1.default>
                  <Grid_1.default item xs={12} sm={6}>
                    <TextField_1.default error={errorForm["addressInvoice"]} value={bodyForm["addressInvoice"]} margin="dense" label="Dirección de facturación*" type="text" fullWidth variant="standard" onChange={function (e) {
                return setBodyFormChange(e, "addressInvoice", 1, true);
            }}/>
                  </Grid_1.default>
                </Grid_1.default>) : (<div></div>)}
              {/* ------------ */}
            </Grid_1.default>
            {/* </DialogContentText> */}
          </DialogContent_1.default>
          <DialogActions_1.default>
            <Button_1.default onClick={handleClose} style={{ color: "blue" }}>
              Atras
            </Button_1.default>
            <Button_1.default variant="contained" type="submit" style={{ backgroundColor: "blue" }} disabled={isLoadingMp}>
              Lo quiero S/.{tourPackage.price}
            </Button_1.default>
          </DialogActions_1.default>
        </form>
      </Dialog_1.default>
    </div>);
};
exports.TourPackageContact = TourPackageContact;
