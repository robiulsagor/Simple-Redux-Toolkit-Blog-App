import { useDispatch, useSelector } from "react-redux"
import { postsSelector, getPostsStatus, getPostsError, fetchPosts } from "../features/posts/postSlice"
import './post.css'
import UserInfo from "./UserInfo"
import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"
import { useEffect } from "react"
import { fetchUsers, userSelector } from "../features/users/userSlice"

const SinglePost = ({ post }) => {
    return (
        <div className="single-post">
            <h3 >{post.title} </h3>
            <p className="post-body">
                {post.body.substr(0, 50)}
            </p>
            <div className="post-info">
                <UserInfo userId={post?.userId} />
                <TimeAgo timestamp={post.date} />
            </div>

            <Reactions reactions={post.reactions} postId={post.id} />
        </div>
    )
}

const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector(postsSelector)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    // dispatch(fetchUsers())
    // const getUsers = useSelector(userSelector)


    useEffect(() => {
        if (postsStatus == 'idle' && dispatch(fetchUsers())) {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])


    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    let content;
    if (postsStatus == 'loading') {
        content = <h2>Loading...</h2>
    } else if (postsStatus == 'success') {
        content = orderedPosts.map(post => (
            <SinglePost key={post.id} post={post} />
        ))
    } else if (postsStatus == 'error') {
        content = <h2>Error..</h2>
    }


    return (
        <div className="post-container">
            <h2>Posts:</h2>
            {content}
        </div>
    )
}

export default Posts