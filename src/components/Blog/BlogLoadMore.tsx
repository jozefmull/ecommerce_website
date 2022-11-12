import { SyntheticEvent} from 'react'
import { useLoadMorePostsQuery } from '../../app/services/postsApi'

import styles from '../../css/Blog.module.css'

import {Post} from '../../app/types/posts'

type Props = {
    skip: number,
    setskip: React.Dispatch<React.SetStateAction<number>>,
    total: number,
    setposts: React.Dispatch<React.SetStateAction<Post[]>>
}

const BlogLoadMore = ({skip, setskip, total, setposts}: Props) => {

    const {data, error} = useLoadMorePostsQuery({skip})

    const handleLoadMore = (e:SyntheticEvent) => {
        e.preventDefault()

        if (data !== undefined) {
            setposts(prev => [...prev, ...data?.posts])
        }

        if (skip < total) {
            setskip(prev => prev += 15)
        }else{
            console.log('asdassadas');
        }
    }

  return (
    <div className={styles.loadMoreWrap}>
        {error ? 'error' : null}
        {skip === total ? (<span>No more posts available!</span>) : null}
        <button onClick={(e) => handleLoadMore(e)} disabled={skip === total}>LOAD MORE</button>
    </div>
  )
}

export default BlogLoadMore