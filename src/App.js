import logo from "./logo.svg";
import "./css/App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import BackToTop from "./Components/BackToTop.jsx";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import Users from "./Components/Users";
import Comments from "./Components/Comments";
import CommentAdder from "./Components/CommentAdder";
import Errors from "./Components/Errors";
import { Route, Routes } from "react-router";
import { userContext } from "./Components/UserContext";
import { useState } from "react";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
  });
  return (
    <userContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          {/* <Route path="/topics" element={<Topics />} /> */}
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id" element={<Comments />} />
          <Route path="/articles/:article_id" element={<CommentAdder />} />
          <Route path="*" element={<Errors />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </userContext.Provider>
  );
};

export default App;
