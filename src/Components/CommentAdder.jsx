import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "./api/api-articles";
import { userContext } from "./UserContext";
import { TiTickOutline } from "react-icons/ti";

const CommentAdder = ({ setComments }) => {
  const [body, setBody] = useState({ username: "", body: "" });
  const [isError, setIsError] = useState(false);
  const [posting, setIsPosting] = useState(false);
  const { loggedInUser } = useContext(userContext);
  const { article_id } = useParams();

  const handlePost = (e) => {
    e.preventDefault();
    setIsPosting(true);

    api.postCommentByArticleId(article_id, body).then((newComments) => {
      setComments((currComment) => {
        return [newComments, ...currComment];
      });
      console.log("comment added");
      console.log(body);
      setIsError(false);
    });
    setBody({ username: "", body: "" });
    setIsPosting(false);
  };

  return (
    <>
      <form className="comment-adder-form" onSubmit={handlePost}>
        <label>Got something to say? Post your comment here: </label>
        <input
          type="text"
          id="comment-input"
          required
          value={body.body}
          onChange={(e) => {
            setBody({
              username: loggedInUser.username,
              body: e.target.value,
            });
          }}
        />
        <button className="comment-submit-btn" type="submit">
          <TiTickOutline size={25} color={"green"} />
        </button>
      </form>
      {isError ? <p>Review not submitted, please try again</p> : null}
    </>
  );
};

export default CommentAdder;
