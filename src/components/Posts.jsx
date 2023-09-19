import { useSelector } from "react-redux"
import { postsSelector } from "../features/posts/postSlice"
import './post.css'
import UserInfo from "./UserInfo"

const SinglePost = ({ post }) => {
    console.log(post);
    return (
        <div className="single-post">
            <h3>{post.title} </h3>
            <p>
                {post.body.substr(0, 50)}
            </p>
            <UserInfo user={post?.userId} />
        </div>
    )
}

const Posts = () => {
    const posts = useSelector(postsSelector)

    return (
        <div className="post-container">
            <h2>Posts:</h2>
            {posts.map(post => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts