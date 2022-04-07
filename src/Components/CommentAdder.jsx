import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "./api/api-articles";
import { userContext } from "./UserContext";

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
      <form onSubmit={handlePost}>
        <label>
          Got something to say? Post your comment here:
          <input
            type="text"
            required
            value={body.body}
            onChange={(e) => {
              setBody({
                username: loggedInUser.username,
                body: e.target.value,
              });
            }}
          />
        </label>
        <button type="submit">Submit your comment!</button>
      </form>
      {isError ? <p>Review not submitted, please try again</p> : null}
    </>
  );
};

export default CommentAdder;

