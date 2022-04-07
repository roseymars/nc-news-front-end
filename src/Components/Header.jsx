import React from "react";
import { useContext } from "react";
import { userContext } from "./UserContext"
import {Link} from 'react-router-dom'


const Header = () => {
  const { loggedInUser } = useContext(userContext)

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const userTime = new Date().toLocaleString("en-US", {timeZone: `${tz}`})
      const displayTime = [...userTime].slice(10, 14).join('') 
      const pmAm = [...userTime].slice(18, 20).join('')
      const usersTime = displayTime + pmAm

  return (
    <>
    <div className="Header">
      <div className="header-contents">
      <img src={require("../assets/NC News-logos_transparent.png")} id="nc-news-logo" alt="NC News"></img>
      <div className="top-right-header">
      <Link to="/users" className="profile-page">
      <button className="login-user-avatar"> <img src="https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_640.png" alt="Logged in User's avatar" className="header-avatar-img"/></button>
      </Link>
      <Link to="/" id="header-home-link">
        Home (back to all articles)
      </Link>
      { loggedInUser.username.length > 0 ? (<span>Logged in as: {loggedInUser.username}</span>) : <span>Not logged in!</span>}
      </div>
      </div>
    </div>
    <span id="user-time">The time is {usersTime} </span>
  </>
  );
};

export default Header;