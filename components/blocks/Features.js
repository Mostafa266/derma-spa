import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import FeatureCard from './../cards/FeatureCard';
import SwiperCore, {Navigation, Pagination} from 'swiper';

export default function Features() {
    SwiperCore.use([Navigation, Pagination]);
    return (
        <section className='features'>
            <div className='container'>
                <div className='features--content'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        breakpoints={{
                            150: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                              768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                              }
                          }}
                        >
                        <SwiperSlide>
                            <FeatureCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
