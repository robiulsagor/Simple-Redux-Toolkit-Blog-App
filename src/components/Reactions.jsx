import { useDispatch } from 'react-redux'
import { reactionsAdded } from '../features/posts/postSlice'

const reactionsEmoji = {
    'thumbsUp': '👍',
    'wow': '😲',
    'heart': '💖',
    'rocket': '🚀',
    'coffee': '☕'
}


const Reactions = ({ reactions, postId }) => {
    const dispatch = useDispatch()

    return (
        <div className='reaction-container'>
            {
                Object.entries(reactionsEmoji).map(([name, emoji]) => {
                    return (
                        <button key={name} type='button' className='reaction-btn'
                            onClick={() =>
                                dispatch(reactionsAdded({
                                    postId,
                                    reaction: name
                                }))}>
                            {emoji} {reactions[name]}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Reactions