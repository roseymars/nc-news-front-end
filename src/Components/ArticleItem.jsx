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
  const formattedDate = publish_date.slice(0, 10);

  return (
      <article className="article-card">
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
            <dt>Likes: {votes}</dt>
            <Link className="view-to-vote-link" to={`/articles/${article_id}`}>
              (Like this post? Click here to view full article)
            </Link>
            <dt>Date of publish: {formattedDate}</dt>
            <dt>Comments: {comments}</dt>
          </dl>
        </div>
      </article>
  );
};

export default ArticleItem;
