import { React, useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import Article from "./Article"
import * as api from "./api/api-articles"
import {useParams} from 'react-router-dom'
// import {SearchBar, List} from './SearchBar'
import loading from '../5.gif'


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams()

  useEffect(() => {
    if (topic != undefined) {
      api.getArticlesByTopic(topic).then((articlesByTopic) => {
       setArticles(articlesByTopic)
       setIsLoading(false)
       return articlesByTopic
      })
      
    } else {
    api.getAllArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
      return articles;
    });
  }
}, [topic])

  return isLoading ? <img className="loading" src={loading} alt="spinning loading wheel icon to signify page is loading"></img> : 
    <div>
      <select className="dropdown-sort-by">
      <option value="newest first">articles (newest)</option>
      <option value="oldest first">articles (oldest)</option>
        <option value="votes">votes</option>
        <option value="comments">comments</option>
      </select>
       <p>Here is your latest scoop...</p>
      {/* <SearchBar articles={articles}/>
      <List articles={articles} /> */}
      {articles.map(({ article_id, title, topic, author, body, votes, created_at, comment_count }) => {
        return (
          <li key={article_id}>
          <ArticleItem
            title={title}
            topic={topic}
            author={author}
            body={body}
            votes={votes}
            publish_date={created_at}
            comments={comment_count}
          />
          <Article article_id={article_id} />
          </li>
        )
      })}
    </div>
}
  
export default Articles;
