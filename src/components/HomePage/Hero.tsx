import { Navigation, Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import heroImage from '../../assets/images/hero_image.png'
import styles from '../../css/HomePage/Hero.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {}

const Hero = (props: Props) => {
const images = new Array(6).fill({ url: heroImage });

  return (
    <section className={styles.hero}>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          className={`${styles.heroSwiper} hero-swiper`}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          updateOnWindowResize
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