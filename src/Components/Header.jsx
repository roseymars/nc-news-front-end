import React from "react";
// import { useContext } from "react";
// import { userContext } from "./UserContext"
import {Link} from 'react-router-dom'

const Header = () => {
  // const { loggedInUser } = useContext(userContext)
  return (
    <div className="Header">
      <h1>NC News</h1>
      <h2>welcome, it's time to scroll!</h2>
      {/* will make button below into link soon */}
      <button> <img src="https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png" alt="Photo of logged in User's avatar"/></button>
      <Link to="/" id="header-home-link">
        Home
      </Link>
      {/* <span>{loggedInUser.username}</span> */}
    </div>
  );
};

export default Header;