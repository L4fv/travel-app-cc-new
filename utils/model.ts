import MasksIcon from "@mui/icons-material/Masks";
import RestaurantMenuSharpIcon from "@mui/icons-material/RestaurantMenuSharp";
import DirectionsCarSharpIcon from "@mui/icons-material/DirectionsCarSharp";
import LocalBarSharpIcon from "@mui/icons-material/LocalBarSharp";


import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';


export default class DefaultForm {
  static formReservation() {
    //console.log('store: ', store)
    return {
      fullName: "",
      fullNameInvoice: "",
      addressInvoice: "",
      mail: "",
      phoneNumber: "",
      documentReservation: "",
      documentInvoice: "",
      observation: "",
      checked: false,
      checked2: true,
    };
  }

  static errorReservation() {
    //console.log('store: ', store)
    return {
      documentReservation: true,
      fullName: true,
      mail: true,
      phoneNumber: true,
    };
  }
  static itemIcon() {
    return [
      { id: 1, description: "Aire Acondicionado", src : 'https://cdn-icons-png.flaticon.com/512/112/112516.png' },
      {
        id: 2,
        description: "Piscina",

        src: 'https://cdn-icons-png.flaticon.com/512/1180/1180797.png',
      },
      {
        id: 3,
        description: "Zona Wifi",

        src: 'https://cdn-icons-png.flaticon.com/512/15/15474.png',
      },
      { id: 4, description: "Areas verdes", src: 'https://cdn-icons-png.flaticon.com/512/46/46296.png' },
      { id: 4, description: "Tv Smart", src: 'https://cdn-icons-png.flaticon.com/512/1670/1670643.png'},
      { id: 4, description: "Restaurante", src: 'https://pic.onlinewebfonts.com/svg/img_217000.png' },
    ];
  }
}
