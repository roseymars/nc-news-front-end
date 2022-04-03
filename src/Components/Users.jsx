import React, { useState, useContext, useEffect } from "react";
import * as api from "./api/api-articles";
import { userContext } from "./UserContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [disable, setDisable] = useState(false)
  const { setLoggedInUser } = useContext(userContext);

  const getAllUsers = () => {
    api.getAllUsernames().then((users) => {
      setUsers(users);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const loggedInUser = (user) => {
      setLoggedInUser(user)
  }

  return (
    <>
      <h2>You're logged in! Want to switch user? </h2>
      <div className="user-gallery">
      {users.map((user) => {
          return (
           <>
              <dl key={user.username} className="user-card">
                  <dt>{user.username}</dt>
                  <dt> {loggedInUser} </dt>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar of user" className="user-list-avatar"></img>
                  <button disabled={disable} onClick={()=> {loggedInUser(user); setDisable(disable);}}> Switch user</button>
              </dl>
              </>
          )
      })}
       </div>
    </>
  );
};

export default Users;
