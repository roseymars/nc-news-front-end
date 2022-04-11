import { React, useState, useEffect, useContext } from "react";
import ArticleItem from "./ArticleItem";
import Loading from "./IsLoading";
import * as api from "./api/api-articles";
import { useParams } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import { userContext } from "./UserContext";
import Errors from "./Errors";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const [error, setIsError] = useState(false);
  const { topic } = useParams();
  const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    api
      .getAllArticles(sortBy, orderBy, topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        return articles;
      })
      .catch(() => {
        setIsError(true);
      })
      setIsError(false);
  }, [sortBy, orderBy, topic]);

  if (error) return <Errors err={`Sorry, topic ${topic} cannot be found`} />;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="articles-list">
      <FilterDropdown
        articles={articles}
        orderBy={orderBy}
        sortBy={sortBy}
        setOrderBy={setOrderBy}
        setSortBy={setSortBy}
      />
      {loggedInUser.username.length > 0 ? <p id="welcome-msg" >Hello {loggedInUser.username}, here is your latest scoop...</p> : <p>Hello, here is your latest scoop...</p>}
      {articles.map(
        ({
          article_id,
          title,
          topic,
          author,
          body,
          votes,
          created_at,
          comment_count,
        }) => {
          return (
            <li key={article_id}>
              <ArticleItem
                article_id={article_id}
                title={title}
                topic={topic}
                author={author}
                body={body}
                votes={votes}
                publish_date={created_at}
                comments={comment_count}
              />
            </li>
          );
        }
      )}
    </div>
  );
};

export default Articles;