export default class DefaultForm {
  static formReservation() {
    //console.log('store: ', store)
    return {
      fullName: null,
      fullNameInvoice: null,
      addressInvoice: null,
      price: null,
      title: null,
      mail: null,
      phoneNumber: null,
      numberAttendees: null,
      documentReservation: null,
      documentInvoice: null,
      observation: null,
      checked: false,
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
}
