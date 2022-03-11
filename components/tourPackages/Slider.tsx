import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { config } from "../../config";

const SliderStyled = styled.div`
  & .swiper-container-thumbs {
    --swiper-navigation-size: 32px;

    & .swiper-slide-thumb-active {
      border-bottom: 3px solid ${config.colors.secondary.DEFAULT};
    }
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    z-index: 2;
  }

  .swiper-slide-active {
    z-index: 3;
  }
`;

export const TourPackageSlider = ({ tourPackage }) => {
  const [thumbs, setThumbs] = useState(null);

  return (
    <SliderStyled>
      <Swiper
        slidesPerView={1}
        grabCursor
        loop
        effect="cube"
        thumbs={{ swiper: thumbs }}
        className="mb-12"
      >
        {tourPackage.images.map((image, i) => (
          <SwiperSlide key={"image" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img
                src={image}
                alt={"Imagen " + i}
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        {tourPackage.videos.map((video, i) => (
          <SwiperSlide key={"video" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <iframe
                className="absolute w-full h-full inset-0"
                src={"https://www.youtube.com/embed/" + video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbs}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        centerInsufficientSlides
        navigation
      >
        {tourPackage.images.map((image, i) => (
          <SwiperSlide key={"timage" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img
                src={image}
                alt={"Imagen " + i}
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        {tourPackage.videos.map((video, i) => (
          <SwiperSlide key={"tvideo" + i}>
            <div className="flex-none w-full pt-2/3 relative">
              <img
                src={`https://img.youtube.com/vi/${video}/mqdefault.jpg`}
                alt={"Imagen " + i}
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled>
  );
};
