import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { config } from "../../config";

import React from "react";

import LightGallery from "lightgallery/react";
import Gallery from "react-photo-gallery"
import { render } from "react-dom";


// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// If you want you can use SCSS instead of css

// import plugins if you need

// import plugins if you need

// export const TourPackageSlider = ({ tourPackage }) => {
//   return (
//     <div className="flex gallery-container" id="animated-thumbnails-gallery">
//       <LightGallery
//       autoplayFirstVideo= {false}
//       pager= {false}
//       galleryId= "nature"
//       plugins={[lgZoom, lgVideo]}
     
//       mode="lg-fade">
//         {tourPackage.images.map((image, i) => (
//           <div className="img-responsive w-60">
//             <a className="gallery-item" href={image}>
//               <img
//                 src={image}
//                 alt={"Imagen " + i}
//                 className="img-responsive w-60"
//               />
//             </a>
//           </div>
//         ))}
//       </LightGallery>
//     </div>
  
//   );
// };

export const TourPackageSlider = ({ tourPackage }) => {
  React.useLayoutEffect = React.useEffect 


  console.log('imageNNN',tourPackage)
  console.log('data')
  return (
    <Gallery photos={tourPackage}  />
    );
};


const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 4927,
    height: 1000
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];
