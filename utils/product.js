"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOfferRate = exports.getRemainingOfferDays = exports.hasActiveOffer = void 0;
var date_fns_1 = require("date-fns");
var hasActiveOffer = function (product) {
    var _a;
    return (((_a = product.offer) === null || _a === void 0 ? void 0 : _a.enabled) &&
        (0, date_fns_1.isAfter)(new Date(), new Date(product.offer.from)) &&
        (0, date_fns_1.isBefore)(new Date(), new Date(product.offer.to)));
};
exports.hasActiveOffer = hasActiveOffer;
var getRemainingOfferDays = function (product) {
    var _a;
    var totalH = (0, date_fns_1.differenceInHours)(new Date((_a = product.offer) === null || _a === void 0 ? void 0 : _a.to), new Date());
    var d = Math.floor(totalH / 24);
    var h = totalH % 24;
    return (d ? d + "d " : "") + h + "h";
};
exports.getRemainingOfferDays = getRemainingOfferDays;
var getOfferRate = function (product) {
    var _a;
    return Math.floor(100 - (((_a = product.offer) === null || _a === void 0 ? void 0 : _a.price) * 100) / product.price);
};
exports.getOfferRate = getOfferRate;
