import { useState, useContext } from "react";
import * as api from "./api/api-articles";
import { userContext } from "./UserContext";
import Errors from "./Errors";
import { MdDeleteForever } from "react-icons/md";

const CommentCard = ({ comment, setComments }) => {
  const { loggedInUser } = useContext(userContext);
  const { comment_id, author, votes, body, created_at } = comment;
  const [deleted, setDeleted] = useState(false);
  const [isDeleted, setIsDeleted] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("Deleted");
  const [isError, setIsError] = useState(false);

  const handleDelete = (id) => {
    setDeleted(true);
    setComments((currComments) => {
      let newComments = currComments.filter((com) => com.id !== comment_id);
      return newComments;
    });
    api.deleteCommentByCommentId(id).catch(() => {
      setIsError(true);
    });
  };

  if (deleted) {
    setTimeout(() => {
      setDeleteMsg(" ");
    }, 10000);
    return <h3 className="deleted-comment">{isDeleted}</h3>;
  }

  if (isError) {
    return <Errors />;
  }
  return (
    <div className="comment-container">
        <dl key={comment_id} className="comments-list">
          <dt className="comments-username">username: {author}</dt>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="avatar of user"
            className="user-list-avatar"
          ></img>
          <p className="comment-body">{body}</p>
          {deleted ? (
            "Comment deleted"
          ) : (
            <button id="delete-comment-btn"
              hidden={author !== loggedInUser.username}
              onClick={() => {
                handleDelete(comment_id);
              }}
            >
              <MdDeleteForever size={25}/>
            </button>
          )}
        </dl>
      </div>
  );
};

export default CommentCard;
