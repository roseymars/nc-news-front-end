// import { useContext, useState } from "react";
// import * as api from "./api/api-articles";
// import { userContext } from "./UserContext";

// const LoggedIn = () => {
//   const { setLoggedIn } = useContext(userContext);
//   const [signIn, setSignIn] = useState("");
//   const [user, setUser] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     api
//       .getUsernames(signIn)
//       .then((user) => {
//         setUser(user);
//         console.log(user);
//         setLoggedIn(user);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <form className="signInPage" onSubmit={handleSubmit}>
//         <ul>
//           <li>
//             Username:{" "}
//             <input
//               type="text"
//               value={signIn.username}
//               onChange={(e) => {
//                 setSignIn(e.target.value);
//               }}
//             ></input>{" "}
//           </li>
//           <button type="submit">Log In</button>
//         </ul>
//       </form>
//     </div>
//   );
// };

// export default loggedIn;
