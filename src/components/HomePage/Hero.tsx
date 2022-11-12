import {useState} from 'react'
import { Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import GeneralLoader from '../Loading/GeneralLoader';

import heroImage from '../../assets/images/hero_image.png'
import styles from '../../css/HomePage/Hero.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


// install Swiper modules

const Hero = () => {

  const [swiperLoading, setswiperLoading] = useState(true)
  const images = new Array(6).fill({ url: heroImage });

  return (
    <section className={styles.hero}>
      {swiperLoading ? ( 
          <div style={{height: '300px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <GeneralLoader />
          </div>
       ) : null}
      <Swiper
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay]}
          className={`${styles.heroSwiper} hero-swiper`}
          slidesPerView={1}
          navigation
          effect='coverflow'
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          updateOnWindowResize
          preloadImages={false}
          lazy={true}
          onSwiper={() => setswiperLoading(false)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`hero-image-${index}`}>
              <img
                height="auto"
                width="auto"
                alt="hero-img"
                src={image.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default Hero