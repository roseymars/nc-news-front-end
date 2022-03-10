import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-project.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsApi
    .get("/articles")
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTopics = () => {
  return newsApi
    .get("/topics")
    .then(({ data: { topics } }) => {
      return topics;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticlesByTopic = (topic) => {
  return newsApi
    .get(`/articles?topic=${topic}`)
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.log(err);
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
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data: { article } }) => {
      console.log(article);
    })
    .catch((error) => console.log(error.response.request._response));
};

// export const getAllUsernames = () => {
//   return newsApi.get("/users").then((res) => {
//     return res.data.user;
//   });
// };
