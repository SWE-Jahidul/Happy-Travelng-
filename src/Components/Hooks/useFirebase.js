// import React, { useState } from "react";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import initilizeauthentication from "../Firebase/firebase.initialize";

// initilizeauthentication();

// const provider = new GoogleAuthProvider();

// const useFirebase = () => {

//     const [user, setUser] = useState({});

//   const signinUsingGoogle = () => {
//       const auth = getAuth();
//       signInWithPopup(auth, provider)
//         .then((result) => {
//           const { displayName, email, photoURL } = result.user;
//           const logedUser = {
//             name: displayName,
//             email: email,
//             photo: photoURL,
//           };
//           setUser(logedUser);
//         })

//         .catch((error) => {});
   
//   };

//   return {
//     signinUsingGoogle,
//   };
// };

// export default useFirebase;
