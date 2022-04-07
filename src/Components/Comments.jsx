import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "./api/api-articles";
import CommentAdder from "./CommentAdder";
import { userContext } from "./UserContext";
import CommentCard from "../Components/CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    api.getCommentsByArticleId(article_id).then((allComments) => {
      console.log(allComments);
      setComments(allComments);
    });
  }, []);

  return (
    <div className="comments">
      {loggedInUser.username === "" ? (
        "Got something to say? Log in to post your comment"
      ) : (
        <CommentAdder
          setComments={setComments}
          comments={comments}
          article_id={article_id}
        />
      )}
      {comments.map((comment) => {
        return <CommentCard comment={comment} setComments={setComments} />;
      })}
    </div>
  );
};

export default Comments;
