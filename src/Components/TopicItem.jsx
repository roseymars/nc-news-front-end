import React from "react";
import ArticleItem from './ArticleItem'

// to render each topic page when topic is clicked on
 const TopicItem = ({title, topic, author, body, created_at, votes, comment_count}) => {
   console.log(title)
  return (
    <div>
      <ArticleItem />
      {/* <dl>
      <dt>title: {title}</dt>
      <dt>{topic}</dt>
      <dt>{author}</dt>
      <dt>{body}</dt>
      <dt>{created_at}</dt>
      <dt>{votes}</dt>
      <dt>{comment_count}</dt>
      </dl> */}
    </div>
  );
}

export default TopicItem;