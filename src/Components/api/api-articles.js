import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-project.herokuapp.com/api",
});

export const getAllArticles = (sort_by, order, topic) => {
  return newsApi
    .get(`/articles`, { params: { sort_by, order, topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getAllTopics = () => {
  return newsApi.get(`/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticlesByTopic = (topic) => {
  return newsApi
    .get(`/articles?topic=${topic}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchArticles = (article_id, votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`, { params: { article_id } })
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postCommentByArticleId = (article_id, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getAllUsernames = () => {
  return newsApi.get(`/users`).then(({ data: { users } }) => {
    return users;
  });
};

export const getOldestArticles = () => {
  return newsApi.get(`/articles?order=ASC`).then(({ data: { articles } }) => {
    return articles;
  });
};

export const deleteCommentByCommentId = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
