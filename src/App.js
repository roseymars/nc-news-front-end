import logo from "./logo.svg";
import "./css/App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        {/* <Route path="/topics" element={<Topics />} /> */}
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
