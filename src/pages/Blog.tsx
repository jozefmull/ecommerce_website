import { useState, useEffect } from 'react'
import { useGetAllPostsQuery } from '../app/services/postsApi'

import Container from '../components/Container'
import BlogCard from '../components/Blog/BlogCard'
import BlogLoader from '../components/Loading/BlogPage/BlogLoader'
import BlogLoadMore from '../components/Blog/BlogLoadMore'

import { Post } from '../app/types/posts'
import styles from '../css/Blog.module.css'

const Blog = () => {
  const [posts, setposts] = useState<Post[]>([])
  const [total, settotal] = useState<number>(0)
  const [skip, setskip] = useState<number>(15)

  const {data, isFetching, error} = useGetAllPostsQuery()

  useEffect(() => {
    if (data?.posts) {
      setposts(data?.posts)
      settotal(data?.total)
    }    
  }, [data])
  
  return (
    <Container>
      <div className={styles.blogWrap}>
        <h1>Blog {total ? `(${total})` : null}</h1>
        {/* if fetching display loader if not check error and if no error display data */}
        {isFetching ? <BlogLoader/> : error ? 'error' : (
          <>
            <div className={styles.blogList}>
              {posts.map((post, id) => (
                <BlogCard key={`post-${id}`} post={post} id={id} />
              ))}
            </div>
            <BlogLoadMore skip={skip} setskip={setskip} total={total} setposts={setposts}/>
          </>
        )}
      </div>
    </Container>
  )
}

export default Blog