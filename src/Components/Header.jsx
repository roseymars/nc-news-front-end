import React from "react";
import { useContext } from "react";
import { userContext } from "./UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <>
      <div className="Header">
        <img
          src={require("../assets/News of the North-logos_transparent.png")}
          id="nc-news-logo"
          alt="NC News"
        ></img>
        <div className="top-right-header">
          {loggedInUser.username.length > 0 ? (
            <span>Logged in as: {loggedInUser.username}</span>
          ) : (
            <span>Not logged in!</span>
          )}
          <Link to="/users" className="profile-page">
            {loggedInUser.username.length > 0 ? (
              <button className="login-user-avatar">SWITCH USER</button>
            ) : (
              <button className="login-user-avatar">LOG IN</button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
