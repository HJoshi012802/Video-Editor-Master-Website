
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from '../assets/Image1.jpg';
import slide_image_2 from '../assets/Image2.png';
import slide_image_3 from '../assets/Image3.png';
import slide_image_4 from '../assets/Image4.png';
import slide_image_5 from '../assets/Image5.png';
import slide_image_6 from '../assets/Image6.png';
import slide_image_7 from '../assets/Image7.png';

export default function Crousel() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[52rem] py-8 relative"
      >
        {[slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7].map((image, index) => (
          <SwiperSlide key={index} className="w-[100px] h-[100px] relative">
            <img
              src={image}
              alt={`slide_image_${index + 1}`}
              className="w-[100px] h-[100px] rounded-2xl object-cover"
            />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination relative w-[15rem] bottom-4" />
        <div className="slider-controler flex justify-center items-center absolute bottom-8 w-full">
          <div className="swiper-button-prev swiper-arrow bg-white w-14 h-14 rounded-full filter drop-shadow-lg left-[42%] transform translate-x-[-42%] md:left-[30%] md:translate-x-[-30%] sm:left-[20%] sm:translate-x-[-20%]"></div>
          <div className="swiper-button-next swiper-arrow bg-white w-14 h-14 rounded-full filter drop-shadow-lg left-[58%] transform translate-x-[-58%] md:left-[70%] md:translate-x-[-70%] sm:left-[80%] sm:translate-x-[-80%]"></div>
        </div>
      </Swiper>
    </div>
  );
}
