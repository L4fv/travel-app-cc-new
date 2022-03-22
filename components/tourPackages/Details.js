"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourPackageDetails = void 0;
var react_1 = require("react");
var react_2 = require("swiper/react");
var styled_components_1 = __importDefault(require("styled-components"));
var SwiperStyled = (0, styled_components_1.default)(react_2.Swiper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --swiper-theme-color: black;\n  --swiper-navigation-size: 20px;\n"], ["\n  --swiper-theme-color: black;\n  --swiper-navigation-size: 20px;\n"])));
var TourPackageDetails = function (_a) {
    var tourPackage = _a.tourPackage;
    var _b = (0, react_1.useState)(0), index = _b[0], setIndex = _b[1];
    var _c = (0, react_1.useState)(null), swiper = _c[0], setSwiper = _c[1];
    var description = tourPackage.details[index].description;
    return (<div className="mt-12">
      <h2 className="text-gray-600 text-xl lg:text-3xl font-bold mb-4">
        Detalles
      </h2>
      <SwiperStyled slidesPerView="auto" centeredSlides={true} navigation grabCursor spaceBetween={24} onSwiper={setSwiper}>
        {tourPackage.details.map(function (detail, i) { return (<react_2.SwiperSlide key={i} className="w-auto my-4">
            <h3 className={"cursor-pointer ".concat(i === index && "font-bold")} onClick={function () {
                setIndex(i);
                swiper.slideTo(i);
            }}>
              {detail.title}
            </h3>
          </react_2.SwiperSlide>); })}
      </SwiperStyled>
      <hr className="mt-2 mb-8 mx-8"/>
      <div className="prose overflow-hidden" dangerouslySetInnerHTML={{
            __html: description,
        }}/>
    </div>);
};
exports.TourPackageDetails = TourPackageDetails;
var templateObject_1;
