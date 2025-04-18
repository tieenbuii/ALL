import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SubInformationProduct from "./SubInformationProduct";

const InformationProduct = ({ data }) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <div className="flex gap-2 bg-white rounded-xl py-8 px-4">
      <div className="w-5/12  mr-8">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs, Autoplay]}
          grabCursor={true}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          thumbs={{ swiper: activeThumb }}
          className="w-full aspect-[2/1] mb-4 border border-gray-200 rounded-lg"
        >
          {data?.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="" className="w-full h-full object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setActiveThumb}
          spaceBetween={10}
          slidesPerView={6.5}
          modules={[Navigation, Thumbs]}
          className="product-images-slider-thumbs"
        >
          {data?.images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SubInformationProduct key={data._id} data={data} />
    </div>
  );
};

export default InformationProduct;
