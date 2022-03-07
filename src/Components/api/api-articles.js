import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-project.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    console.log(articles);
    // return articles;
  });
};
