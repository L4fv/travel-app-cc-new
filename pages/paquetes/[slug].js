"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
var react_1 = require("react");
var head_1 = __importDefault(require("next/head"));
var error_1 = __importDefault(require("next/error"));
var script_1 = __importDefault(require("next/script"));
var router_1 = require("next/router");
var swiper_1 = __importStar(require("swiper"));
var config_1 = require("../../config");
var Layout_1 = require("../../components/shared/Layout");
var useTourPackages_1 = require("../../hooks/useTourPackages");
var Slider_1 = require("../../components/tourPackages/Slider");
var Calendar_1 = require("../../components/tourPackages/Calendar");
var Details_1 = require("../../components/tourPackages/Details");
var Capacity_1 = require("../../components/tourPackages/Capacity");
var Contact_1 = require("../../components/tourPackages/Contact");
var NoSSR_1 = require("../../components/shared/NoSSR");
var product_1 = require("../../utils/product");
swiper_1.default.use([swiper_1.Navigation, swiper_1.Pagination, swiper_1.A11y, swiper_1.EffectCube, swiper_1.Thumbs]);
function TourPackagePage(props) {
    var router = (0, router_1.useRouter)();
    var slug = router.query.slug;
    var _a = (0, useTourPackages_1.useTourPackage)(slug, props.tourPackage), tourPackage = _a.data, error = _a.error;
    var _b = (0, react_1.useState)({
        from: null,
        to: null,
    }), selectedDayRange = _b[0], setSelectedDayRange = _b[1];
    var _c = (0, react_1.useState)({}), mp = _c[0], setMercadoPago = _c[1];
    var _d = (0, react_1.useState)(tourPackage || 1), peopleQuantity = _d[0], setPeopleQuantity = _d[1];
    if (error)
        return <error_1.default statusCode={404}/>;
    if (!tourPackage)
        return (<Layout_1.Layout>
        <div className="max-w-6xl mx-auto">Loading...</div>
      </Layout_1.Layout>);
    var hasOffer = (0, product_1.hasActiveOffer)(tourPackage);
    return (<Layout_1.Layout>
      <head_1.default>
        <title>
          {tourPackage.name} | {config_1.config.name}
        </title>
      </head_1.default>
      <script_1.default id="mercadopago-js" src="https://sdk.mercadopago.com/js/v2" onLoad={function () {
            setMercadoPago(new window.MercadoPago("TEST-408b3c56-a1f5-4dd0-9039-e222d131830b", { locale: "es-PE" }));
        }}/>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px] gap-6 md:gap-8 lg:gap-x-16 mb-6">
          <div className="min-w-0">
            <h1 className="text-primary text-3xl lg:text-4xl font-bold mb-6">
              {tourPackage.name}
            </h1>
            <NoSSR_1.NoSSR>
              <Slider_1.TourPackageSlider tourPackage={tourPackage}/>
              <Details_1.TourPackageDetails tourPackage={tourPackage}/>
            </NoSSR_1.NoSSR>
          </div>
          <div>
            <div className="text-center my-6">
              <div className="inline-flex px-8 py-2 bg-secondary text-white rounded-full shadow-lg">
                {tourPackage.duration + 1} días / {tourPackage.duration} noches
              </div>
            </div>
            <Calendar_1.TourPackageCalendar tourPackage={tourPackage} range={selectedDayRange} handleChange={setSelectedDayRange}/>
            <div className="text-center mt-8 md:mt-12 mb-6">
              <div className="inline-flex px-8 py-2 bg-tertiary text-white rounded-full shadow-lg">
                <div>
                  {hasOffer && (<span className="line-through">S/.{tourPackage.price}</span>)}{" "}
                  S/.
                  {hasOffer ? tourPackage.offer.price : tourPackage.price} por
                  persona
                  {hasOffer && (<span className="text-white mt-1 font-bold">
                      {" "}
                      (-{(0, product_1.getOfferRate)(tourPackage)}%)
                    </span>)}
                </div>
              </div>
            </div>
            <Capacity_1.TourPackageCapacity defaultCapacity={tourPackage.capacity.min} min={tourPackage.capacity.min} max={tourPackage.capacity.max} onChange={setPeopleQuantity}/>
            <div className="text-center my-4">
              <div>TOTAL</div>
              {hasOffer && (<div className="text-gray-400 line-through">
                  S/.{tourPackage.price * peopleQuantity}
                </div>)}
              <div className="text-primary font-bold text-xl">
                {hasOffer && "Oferta: "}
                S/.
                {(hasOffer ? tourPackage.offer.price : tourPackage.price) *
            peopleQuantity}
              </div>
              {hasOffer && (<p className="text-red-500">
                  La oferta termina en {(0, product_1.getRemainingOfferDays)(tourPackage)}.
                </p>)}
            </div>

            <Contact_1.TourPackageContact tourPackage={tourPackage} range={selectedDayRange} quantity={peopleQuantity} mp={mp}/>
          </div>
        </div>
      </div>
    </Layout_1.Layout>);
}
exports.default = TourPackagePage;
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var tourPackages, error_2, paths;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, useTourPackages_1.fetchTourPackages)()];
                case 1:
                    tourPackages = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    tourPackages = [];
                    return [3 /*break*/, 3];
                case 3:
                    paths = tourPackages.map(function (tp) { return ({ params: { slug: tp.slug } }); });
                    return [2 /*return*/, {
                            paths: paths,
                            fallback: "blocking",
                        }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
function getStaticProps(_a) {
    var params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var tourPackage, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, useTourPackages_1.fetchTourPackage)(params.slug)];
                case 1:
                    tourPackage = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.log("eerror ", error_3);
                    return [2 /*return*/, {
                            notFound: true,
                        }];
                case 3: return [2 /*return*/, { props: { tourPackage: tourPackage }, revalidate: 10 }];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
