"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultForm = /** @class */ (function () {
    function DefaultForm() {
    }
    DefaultForm.formReservation = function () {
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
    };
    DefaultForm.errorReservation = function () {
        //console.log('store: ', store)
        return {
            documentReservation: true,
            fullName: true,
            mail: true,
            phoneNumber: true,
        };
    };
    return DefaultForm;
}());
exports.default = DefaultForm;
