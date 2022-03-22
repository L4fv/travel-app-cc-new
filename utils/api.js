"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = void 0;
var axios_1 = __importDefault(require("axios"));
var api = axios_1.default.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
});
var fetcher = function (url) { return api.get(url).then(function (res) { return res.data; }); };
exports.fetcher = fetcher;
exports.default = api;
