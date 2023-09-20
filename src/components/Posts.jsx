import { useSelector } from "react-redux"
import { postsSelector } from "../features/posts/postSlice"
import './post.css'
import UserInfo from "./UserInfo"
import TimeAgo from "./TimeAgo"
import Reactions from "./Reactions"

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
    const posts = useSelector(postsSelector)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    console.log(orderedPosts);

    return (
        <div className="post-container">
            <h2>Posts:</h2>
            {orderedPosts.map(post => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts