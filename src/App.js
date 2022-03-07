import logo from "./logo.svg";
import "./css/App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/articles" element={<Articles />} /> */}
      <NavBar />
      <Articles />
      {/* </Routes> */}
    </div>
  );
};

export default App;
