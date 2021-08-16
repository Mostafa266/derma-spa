import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import FeatureCard from './../cards/FeatureCard';
import lifeGaurd from './../../public/lifeGaurd.svg';
import carehand from './../../public/careHand.svg';

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
                            <FeatureCard 
                            textCard = {true}
                            totalNumber='9' 
                            outNumber='110'  
                            title='Long term sustained improvement' 
                            desc='9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).' 
                            link='See efficacy and trial data' 
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureCard 
                                textCard = {false}
                                totalNumber='9' 
                                outNumber='120'  
                                title='Long term sustained improvement' 
                                desc='9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).' 
                                link='Learn more about quality of life improvements' 
                                decorationImg={lifeGaurd}

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureCard 
                                textCard = {false}
                                totalNumber='9' 
                                outNumber='120'  
                                title='Long term sustained improvement' 
                                desc='9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).' 
                                link='See safety profile' 
                                decorationImg={carehand}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
