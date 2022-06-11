import MasksIcon from "@mui/icons-material/Masks";
import RestaurantMenuSharpIcon from "@mui/icons-material/RestaurantMenuSharp";
import DirectionsCarSharpIcon from "@mui/icons-material/DirectionsCarSharp";
import LocalBarSharpIcon from "@mui/icons-material/LocalBarSharp";
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
      checked2: false,
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
      { id: 1, description: "Higiene", icon: MasksIcon },
      {
        id: 2,
        description: "Comidas",

        icon: RestaurantMenuSharpIcon,
      },
      {
        id: 3,
        description: "Transporte",

        icon: DirectionsCarSharpIcon,
      },
      { id: 4, description: "Bebidas", icon: LocalBarSharpIcon },
    ];
  }
}
