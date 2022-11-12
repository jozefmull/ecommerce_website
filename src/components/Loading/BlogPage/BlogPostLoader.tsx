import styles from '../../../css/Loaders/BlogPage/BlogPostLoader.module.css'

const BlogPostLoader = () => {
  return (
    <div className={styles.blogPostLoaderWrap}>
        <div className={styles.skeleton}></div>
        <div className={styles.flex}>
            <div className={styles.skeleton}></div>
            <div className={styles.skeleton}></div>
        </div>
        <div className={styles.skeleton}></div>
    </div>
  )
}

export default BlogPostLoader