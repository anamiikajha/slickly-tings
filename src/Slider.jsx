// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    <SwiperSlide>
        <img src="public/kali.jpg" alt="" style={{width: "100%"}} />
    </SwiperSlide>
    <SwiperSlide>
    <img src="public/background.jpg" alt=""  style={{width: "100%"}} />
        </SwiperSlide>
    <SwiperSlide>
    <img src="public/bg.png" alt=""  style={{width: "100%"}} />
    </SwiperSlide>
    <SwiperSlide>
    <img src="public/g.jpg" alt=""  style={{width: "100%"}} />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider