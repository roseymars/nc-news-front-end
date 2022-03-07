import React from 'react'

const ArticleItem = () => {
    return (
  <div className="article-container">
  <h3>Article Name</h3>
  <p className= "article-card-contents">Article Body</p>
  <ul className="article-card-contents">
      <li>Author</li>
      <li>Vote Count</li>
      <li>Comment Count</li>
      <li>Author</li>
      <li>Date of publish</li>
  </ul>
</div>
    )
}

export default ArticleItem;