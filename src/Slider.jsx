// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

function Slider() {
  return (                                                                                                          
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    spaceBetween={50}
    effect="fade"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    <SwiperSlide>
    <img src="/kali.jpg" alt="" style={{width: "100%", height: "100vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="/background.jpg" alt="" style={{width:"100%", height: "100vh"}} />
        </SwiperSlide>
    <SwiperSlide>
    <img src="/bg.png" alt=""  style={{width: "100%", height: "100vh"}} />
    </SwiperSlide>
    <SwiperSlide>
    <img src="/g.jpg" alt=""  style={{width: "100%", height: "100vh"}} />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
