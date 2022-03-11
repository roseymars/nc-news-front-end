import React from "react";
// import { useContext } from "react";
// import { userContext } from "./UserContext"
import {Link} from 'react-router-dom'

// To consider: initial avatar image says "login" then changes to user icon. Less confusing
// for the user as it's clear where to log in
const Header = () => {
  // const { loggedInUser } = useContext(userContext)
  return (
    <div className="Header">
      <h1>NC News</h1>
      <h2>welcome, it's time to scroll!</h2>
      {/* will make button below into link soon */}
      <button className="login-user-avatar"> <img src="https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png" alt="Logged in User's avatar"/></button>
      <Link to="/" id="header-home-link">
        Home (back to all articles)
      </Link>
      {/* <span>{loggedInUser.username}</span> */}
    </div>
  );
};

export default Header;