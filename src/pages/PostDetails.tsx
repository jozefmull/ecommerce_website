import {useParams} from 'react-router-dom'

import { useGetPostDetailsQuery, useGetPostCommentsQuery } from '../app/services/postsApi';
// import { useGetPostUserQuery } from '../app/services/userApi';

import Container from '../components/Container';
import BlogPostLoader from '../components/Loading/BlogPage/BlogPostLoader';
import CommentsLoader from '../components/Loading/BlogPage/CommentsLoader';

import styles from '../css/Blog.module.css'

const PostDetails = () => {

    const {postId} = useParams()

    const {data, isFetching, error} = useGetPostDetailsQuery({postId})
    const {data:commentsData, isFetching:commentsIsFetching, error:commentsError} = useGetPostCommentsQuery({postId})

    // const {data:userData, isFetching:userIsFetching, error:userError} = useGetPostUserQuery({data?.userId})
    // console.log(data?.userId);
    
  return (
    <Container>
        <div className={styles.postDetailsWrap}>
            {/* if fetching display loader if not check error and if no error display data */}
            {isFetching ? <BlogPostLoader/> : error ? 'error' : (
                <>
                    <h1>{data?.title}</h1>
                    {/* <h2>By: {data?.userId}</h2> */}
                    <ul className={styles.tagsList}>
                        {data?.tags?.map((tag,id) => (
                            <li key={`${tag}-${id}`} style={{animationDelay: id + '00ms'}}>{tag}</li>
                        ))}
                    </ul>
                    <p>{data?.body}</p>
                </>
            )}
            {/* if fetching coments display loader if not check error and if no error display data */}
            {commentsIsFetching ? <CommentsLoader/> : commentsError ? 'error' : (
                <>
                     <h3>Comments ({commentsData?.total})</h3>
                    <ul className={styles.commentsList}>
                        {commentsData?.comments.map((comment, id) => (
                            <li key={`comment-${id}`} style={{animationDelay: id + '0ms'}}>
                                <span>By: {comment.user.username.toUpperCase()}</span>
                                <p>{comment.body}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    </Container>
  )
}

export default PostDetails