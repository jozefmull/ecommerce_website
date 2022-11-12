import {useMemo} from 'react'
import { useGetSwiperPostsQuery } from '../../app/services/postsApi';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Post } from '../../app/types/posts';

import BlogCard from '../Blog/BlogCard';
import BlogSliderLoading from '../Loading/HomePage/BlogSliderLoading';

import styles from '../../css/HomePage/BlogSlider.module.css'

const BlogSlider = () => {

  const { data, isFetching, error } = useGetSwiperPostsQuery();

  const BLOG_POSTS = useMemo(() => data?.posts?.map((post:Post,id:number) =>(
    <SwiperSlide key={`${post.title}-${id}`} className={styles.blogSliderItem}>
      <BlogCard post={post} id={id} />
    </SwiperSlide>
  )), [data])

  return (
    <section className={styles.blogSliderWrap}>
        <h2>Blog</h2>
        <p>Check out our latest posts</p>
        {isFetching ? <BlogSliderLoading/> : error ? 'error' : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation
            observer
            observeParents
            slidesPerView={4}
            className={`${styles.blogSlider} blog-slider`}
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200:{
                slidesPerView: 5,
              }
            }}
          >
            {BLOG_POSTS}
          </Swiper>
        )}
    </section>
  )
}

export default BlogSlider