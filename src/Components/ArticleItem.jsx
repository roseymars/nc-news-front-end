import {React, useState} from "react";
import ReadMoreReact from "read-more-react"
import { Link } from "react-router-dom";

const ArticleItem = ({title, topic, author, body, article_id, votes, comments, publish_date}) => {
//   const [articleItem, setArticleItem] = useState([
//   ]);
const [disable, setDisable] = useState(false)
  return (
    <article className="article-card">
      {/* so can link to individual article, create api func:- */}
      <Link to={`/article/${article_id}`}>
        <h3 className="article-header">{title}</h3>
      </Link>
    <div className="article-item">
          <dl>
          <ReadMoreReact style={{color: "red"}} text={body} readMoreText="<click here to read more>"/>
          <dt className="topic">topic: {topic}</dt>
              <dt className="user">author: {author}</dt>
              <dt>votes: {votes}</dt>
              <dt>date of publish: {publish_date.slice(0, 10)}</dt>
              <dt>comments: {comments}</dt>
              <button type="button" disabled={disable} onClick={() => setDisable(true)} id="article-vote-btn">Upvote</button>
              <button type="button" id="article-downvote-btn">Downvote</button>
              </dl>
          </div>
          </article>
  );
};

export default ArticleItem;
