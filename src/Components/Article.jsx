import React, { useState, useEffect, useContext } from "react";
import * as api from "./api/api-articles";
import { useParams } from "react-router-dom";
import loading from "../5.gif";
import Errors from "./Errors";
import VoteAdder from "./VoteAdder";
import Comments from "./Comments";
import { userContext } from "./UserContext";

const Article = () => {
  const [articleById, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(userContext);
  console.log(loggedInUser);

  useEffect(() => {
    if (article_id !== undefined)
      api
        .getArticleById(article_id)
        .then((articleById) => {
          setArticleById(articleById);
          setIsLoading(false);
          return articleById;
        })
        .catch(() => {
          setIsError(true);
        });
  }, [article_id]);

  const { topic, body, author, votes, created_at, comment_count } = articleById;

  if (error)
    return <Errors err={`Sorry, article ${article_id} cannot be found`} />;

  return isLoading ? (
    <img
      className="loading"
      src={loading}
      alt="spinning loading wheel icon when page is loading"
    ></img>
  ) : (
    <div className="single-article-and-comments">
      <h3>{articleById.title}</h3>
      <dl className="single-article">
        <dt>{body} </dt>
        <dt className="topic">topic: {topic}</dt>
        <dt className="user">author: {author}</dt>
        {/* <dt>Votes: {votes}</dt> */}
        <dt>Date of publish: {created_at.slice(0, 10)}</dt>
        <dt>Comments: {comment_count}</dt>
        <VoteAdder votes={votes} author={author} />
      </dl>
      <Comments />
    </div>
  );
};

export default Article;
