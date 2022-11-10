import { useGetAllPostsQuery } from '../app/services/postsApi'

import Container from '../components/Container'
import BlogCard from '../components/Blog/BlogCard'

import styles from '../css/Blog.module.css'

const Blog = () => {
  const {data, isFetching, error} = useGetAllPostsQuery()

  return (
    <Container>
      <div className={styles.blogWrap}>
        <h1>Blog</h1>
        <div className={styles.blogList}>
          {data?.posts?.map((post,id) => (
            <BlogCard key={`post-${id}`} post={post} id={id} />
          ))}
        </div>
        <button>LOAD MORE</button>
      </div>
    </Container>
  )
}

export default Blog