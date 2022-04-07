// import * as api from './api/api-articles'
// import { useContext, useState } from 'react'
// import { userContext } from "./UserContext.jsx"
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// // export  const CommentDeleter = ({comments, setComments, }) => {
// //     api.deleteCommentByCommentId(comment_id, author).then(() => {
// //         if (comments.author === loggedInUser)
// //         setComments(comments)
// //     })
// // }

// const CommentDeleter = ({id, author, setComments, comments}) => {
//     const { loggedInUser } = useContext(userContext)
//     const [deleted, setDeleted] = useState(false)
//     const [msg, setMsg] = useState("Deleted")
//     const [isDeleted, setIsDeleted] = useState("")

//     // const handleDelete = (id) => {
//     //     setDeleted(true)
//     //          setComments((currComments)=> {
//     //              let newComments = currComments.filter((com) => com.id !== id)
//     //             return newComments
//     //          })
//     //     api.deleteCommentByCommentId(id)
//     // }

//     return (
//         <>
//         {deleted ? ("Comment deleted") : 
//         <button hidden={author !== loggedInUser.username} onClick={() => {handleDelete(id)}}>Delete Comment</button>
//     } 
//         </>
//     )
// }

// export default CommentDeleter;