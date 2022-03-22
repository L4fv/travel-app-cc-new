"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTourPackages = exports.useTourPackage = exports.fetchTourPackages = exports.fetchTourPackage = void 0;
var swr_1 = __importDefault(require("swr"));
var api_1 = require("../utils/api");
var TOUR_PACKAGES_PATH = "/customer/tour-packages/";
var fetchTourPackage = function (slug) { return (0, api_1.fetcher)(TOUR_PACKAGES_PATH + slug); };
exports.fetchTourPackage = fetchTourPackage;
var fetchTourPackages = function () { return (0, api_1.fetcher)(TOUR_PACKAGES_PATH); };
exports.fetchTourPackages = fetchTourPackages;
var useTourPackage = function (slug, initialData) {
    return (0, swr_1.default)(TOUR_PACKAGES_PATH + slug, api_1.fetcher, { initialData: initialData });
};
exports.useTourPackage = useTourPackage;
var useTourPackages = function (initialData) {
    return (0, swr_1.default)(TOUR_PACKAGES_PATH, api_1.fetcher, { initialData: initialData });
};
exports.useTourPackages = useTourPackages;
