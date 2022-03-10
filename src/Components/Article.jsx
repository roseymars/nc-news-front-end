import React, { useState, useEffect } from "react";
import * as api from "./api/api-articles";
import { useParams } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import loading from "../5.gif"


const Article = () => {
  const [articleById, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const { article_id } = useParams();

  // isLoading
  useEffect(() => {
    if (article_id != undefined)
      api.getArticleById(article_id).then((articleById) => {
        console.log(articleById, "above set");
        setArticleById(articleById);
        setIsLoading(false)
        console.log(articleById, "below set");
        return articleById;
      });
  }, []);

  const { topic, body, author, votes, created_at, comment_count } = articleById;

  return isLoading ? <img className="loading" src={loading} alt="spinning loading wheel icon to signify page is loading"></img> :
    <div className="single-article">
      <h3>{articleById.title}</h3>
      <dl>
        <dt>{body} </dt>
        <dt className="topic">topic: {topic}</dt>
        <dt className="user">author: {author}</dt>
        <dt>Votes: {votes}</dt>
        <dt>Date of publish: {created_at.slice(0,10)}</dt>
        <dt>Comments: {comment_count}</dt>
        <button type="button" disabled={disable} onClick={() => setDisable(true)} id="article-vote-btn">Upvote</button> 
         <button type="button" id="article-downvote-btn">Downvote</button>
      </dl>
    </div>

    //   will need to render comment card also
};

export default Article;
