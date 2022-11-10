import {Link} from 'react-router-dom'

import { Post } from '../../app/types/posts'

import BlogPostImage from '../../assets/images/blog_post.png'
import styles from '../../css/Blog.module.css'

type Props = {
    post: Post,
    id: number
}

const BlogCard = ({post, id}: Props) => {
  return (
    <div key={`post-${id}`} className={styles.blogCard}>
        <Link to={`/blog/post/${post.id}`} />
        <img src={BlogPostImage} alt='blog-post' />
        <div>
        <ul className={styles.tagsList}>
            {post.tags?.map((tag, id) => (
            <li key={`${tag}-${id}`}>{tag}</li>
            ))}
        </ul>
        <h3>{post.title}</h3>
        </div>
    </div>
  )
}

export default BlogCard