import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import * as api from "./api/api-articles"

const Comments = (props) => {
    const { article_id } = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        api.getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments)
    })
}, [article_id])

// const { author, body, comment_id } = comments

    return (
        <div className="comments">
        <ul>
            {comments.map(({ author, body, comment_id}) => {
                return (
                    <li key={comment_id}>
                        <dt>username: {author}</dt>
                        <p>{body}</p>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Comments;