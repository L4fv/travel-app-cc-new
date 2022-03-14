export interface ITourPayment {
  fullName: string;
  fullNameInvoice: string;
  addressInvoice: string;
  collector_id: number;
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
