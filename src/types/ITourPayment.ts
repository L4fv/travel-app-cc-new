export interface ITourPayment {
  _id: string;
  fullName: string;
  fullNameInvoice: string;
  addressInvoice: string;
  preferenceId: string;
  price: string;
  title: string;
  mail: string;
  phoneNumber: string;
  numberAssitent: number;
  documentReservation: number;
  documentInvoice: number;
  observation: string;
  createdAt: Date;
  updatedAt: Date;
}
