import {useMemo} from 'react'
import { useGetSwiperPostsQuery } from '../../app/services/postsApi';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BlogPostImage from '../../assets/images/blog_post.png'

import 'swiper/css';
import 'swiper/css/navigation';
import { Post } from '../../app/types/posts';

import styles from '../../css/HomePage/BlogSlider.module.css'

type Props = {}

const BlogSlider = (props: Props) => {

  const { data, isFetching, error } = useGetSwiperPostsQuery();

  const BLOG_POSTS = useMemo(() => data?.posts?.map((post:Post,id:number) =>(
    <SwiperSlide key={`${post.title}-${id}`} className={styles.blogSliderItem}>
      <img src={BlogPostImage} alt='blog-post' />
      <h3>{post.title}</h3>
    </SwiperSlide>
  )), [data])


  return (
    <section className={styles.blogSliderWrap}>
        <h2>Blog</h2>
        <p>Check out our latest posts</p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          // navigation
          slidesPerView={4}
          className={styles.blogSlider}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {BLOG_POSTS}
        </Swiper>
    </section>
  )
}

export default BlogSlider