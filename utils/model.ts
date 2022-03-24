export default class DefaultForm {
  static formReservation() {
    //console.log('store: ', store)
    return {
      fullName: '',
      fullNameInvoice: '',
      addressInvoice: '',
      mail: '',
      phoneNumber: '',      
      documentReservation: '',
      documentInvoice: '',
      observation: '',
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
