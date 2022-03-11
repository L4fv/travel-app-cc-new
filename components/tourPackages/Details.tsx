import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const SwiperStyled = styled(Swiper)`
  --swiper-theme-color: black;
  --swiper-navigation-size: 20px;
`;

export const TourPackageDetails = ({ tourPackage }) => {
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const description = tourPackage.details[index].description;

  return (
    <div className="mt-12">
      <h2 className="text-gray-600 text-xl lg:text-3xl font-bold mb-4">
        Detalles
      </h2>
      <SwiperStyled
        slidesPerView="auto"
        centeredSlides={true}
        navigation
        grabCursor
        spaceBetween={24}
        onSwiper={setSwiper}
      >
        {tourPackage.details.map((detail, i) => (
          <SwiperSlide key={i} className="w-auto my-4">
            <h3
              className={`cursor-pointer ${i === index && "font-bold"}`}
              onClick={() => {
                setIndex(i);
                swiper.slideTo(i);
              }}
            >
              {detail.title}
            </h3>
          </SwiperSlide>
        ))}
      </SwiperStyled>
      <hr className="mt-2 mb-8 mx-8" />
      <div
        className="prose overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};
