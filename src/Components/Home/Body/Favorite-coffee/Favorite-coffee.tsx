import React from 'react';
import coffee1 from '../../../img/coffee-slider-1.png'
import coffee2 from '../../../img/coffee-slider-2.png'
import coffee3 from '../../../img/coffee-slider-3.png'
import S from './Favorite-coffee.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = () => {

  const srcValue1: string = coffee1 as string;
  const srcValue2: string = coffee2 as string;
  const srcValue3: string = coffee3 as string;

  const sliderData = [
    {
      id: 1,
      src: srcValue1,
      name: "S’mores Frappuccino",
      description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
      prise: "$5.50"
    },
    {
      id: 2,
      src: srcValue2,
      name: "Caramel Macchiato",
      description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
      prise: "$5.00"
    },
    {
      id: 3,
      src: srcValue3,
      name: "Ice coffee",
      description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
      prise: "$4.50"
    }
  ];

  return (
    <div id='c1' className={S.container}>
      <div className={S.textHead}>Choose your <i className={S.i}>favorite</i> coffee</div>
      <Swiper className={S.imageSlider}
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{
                clickable: true
              }}
      >
        {sliderData.map((slider) => (
          <SwiperSlide className={S.sliderContainer} key={slider.id}>
            <img src={slider.src} alt={slider.name}/>
            <div className={S.sliderName}>{slider.name}</div>
            <div className={S.sliderDescription}>{slider.description}</div>
            <div className={S.sliderPrise}>{slider.prise}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


