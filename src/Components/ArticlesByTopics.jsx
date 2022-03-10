// import React, {useState, useEffect} from 'react'
// import { getArticlesByTopic } from "./api/api-articles";
// import { useParams } from 'react-router-dom';
// import TopicItem from './TopicItem'
// import ArticleItem from "./ArticleItem"
// import * as api from "./api/api-articles"

// const ArticlesByTopic = () => {
//     const [articlesByTopic, setArticlesByTopics] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const {topic_slug} = useParams()

//     useEffect(() => {
//         setIsLoading(true)
//         api.getArticlesByTopic(topic_slug).then(({ articlesByTopic }) => {
//             console.log(articlesByTopic)
//         setArticlesByTopics(articlesByTopic);
//           setIsLoading(false);
//         });
//       }, [topic_slug]);

//       return isLoading ? (
//           <p>Loading...</p>
//       ) : (
//           <div className="topic-card">
//               {articlesByTopic.map(({article_id, title, topic, author, body, created_at, votes, comment_count}) => {
//                   return (
//                       <li key={article_id}>
//                           {/* <ArticleItem /> */}
//                           <TopicItem
//                         title={title}
//                           topic={topic}
//                           author={author}
//                           body={body}
//                           created_at={created_at}
//                           votes={votes}
//                           comment_count={comment_count}
//                           />
//                       </li>

//                   )
//               })}
//           </div>
//       )
// }

// export default ArticlesByTopic;