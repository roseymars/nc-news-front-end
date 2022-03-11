import { React } from "react";
import ReadMoreReact from "read-more-react";
import { Link } from "react-router-dom";

const ArticleItem = ({
  title,
  topic,
  author,
  body,
  article_id,
  votes,
  comments,
  publish_date,
}) => {
  //   const [articleItem, setArticleItem] = useState([
  //   ]);
  const formattedDate = publish_date.slice(0, 10);

  return (
    <div className="article-item-home-page">
    <article className="article-card">
      {/* so can link to individual article, create api func:- */}
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-header">{title}</h3>
      </Link>
      <div className="article-item">
        <dl>
          <ReadMoreReact
            text={body}
            readMoreText="<click here to read more>"
          />
          <dt className="topic">topic: {topic}</dt>
          <dt className="user">author: {author}</dt>
          <dt>Votes: {votes}</dt>
          <Link className="view-to-vote-link" to={`/articles/${article_id}`}>(view full article to vote)</Link>
          <dt>Date of publish: {formattedDate}</dt>
          <dt>Comments: {comments}</dt>
          {/* <VoteAdder votes={votes} article_id={article_id} /> */}
          {/* <button
            type="button"
            disabled={disable}
            onClick={() => setDisable(true)}
            id="article-vote-btn"
          >
            Upvote
          </button>
          <button type="button" id="article-downvote-btn">
            Downvote
          </button> */}
        </dl>
      </div>
    </article>
    </div>
  );
};

export default ArticleItem;
