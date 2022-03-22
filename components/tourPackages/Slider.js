"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourPackageSlider = void 0;
var react_1 = require("react");
var react_2 = require("swiper/react");
var styled_components_1 = __importDefault(require("styled-components"));
var config_1 = require("../../config");
var SliderStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .swiper-container-thumbs {\n    --swiper-navigation-size: 32px;\n\n    & .swiper-slide-thumb-active {\n      border-bottom: 3px solid ", ";\n    }\n  }\n\n  .swiper-slide-prev,\n  .swiper-slide-next {\n    z-index: 2;\n  }\n\n  .swiper-slide-active {\n    z-index: 3;\n  }\n"], ["\n  & .swiper-container-thumbs {\n    --swiper-navigation-size: 32px;\n\n    & .swiper-slide-thumb-active {\n      border-bottom: 3px solid ", ";\n    }\n  }\n\n  .swiper-slide-prev,\n  .swiper-slide-next {\n    z-index: 2;\n  }\n\n  .swiper-slide-active {\n    z-index: 3;\n  }\n"])), config_1.config.colors.secondary.DEFAULT);
var TourPackageSlider = function (_a) {
    var tourPackage = _a.tourPackage;
    var _b = (0, react_1.useState)(null), thumbs = _b[0], setThumbs = _b[1];
    return (<SliderStyled>
      <react_2.Swiper slidesPerView={1} grabCursor loop effect="cube" thumbs={{ swiper: thumbs }} className="mb-12">
        {tourPackage.images.map(function (image, i) { return (<react_2.SwiperSlide key={"image" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img src={image} alt={"Imagen " + i} className="absolute w-full h-full inset-0 object-cover"/>
            </div>
          </react_2.SwiperSlide>); })}
        {tourPackage.videos.map(function (video, i) { return (<react_2.SwiperSlide key={"video" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <iframe className="absolute w-full h-full inset-0" src={"https://www.youtube.com/embed/" + video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
          </react_2.SwiperSlide>); })}
      </react_2.Swiper>

      <react_2.Swiper onSwiper={setThumbs} spaceBetween={10} slidesPerView={4} watchSlidesVisibility={true} watchSlidesProgress={true} centerInsufficientSlides navigation>
        {tourPackage.images.map(function (image, i) { return (<react_2.SwiperSlide key={"timage" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img src={image} alt={"Imagen " + i} className="absolute w-full h-full inset-0 object-cover"/>
            </div>
          </react_2.SwiperSlide>); })}
        {tourPackage.videos.map(function (video, i) { return (<react_2.SwiperSlide key={"tvideo" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img src={"https://img.youtube.com/vi/".concat(video, "/mqdefault.jpg")} alt={"Imagen " + i} className="absolute w-full h-full inset-0 object-cover"/>
            </div>
          </react_2.SwiperSlide>); })}
      </react_2.Swiper>
    </SliderStyled>);
};
exports.TourPackageSlider = TourPackageSlider;
var templateObject_1;
