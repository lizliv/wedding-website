import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmxHPISOdSZsCgWDgVwzc8s3i9spa_-D0",
    authDomain: "lizandchristian2022-f3185.firebaseapp.com",
    databaseURL: "https://lizandchristian2022-f3185-default-rtdb.firebaseio.com",
    projectId: "lizandchristian2022-f3185",
    storageBucket: "lizandchristian2022-f3185.appspot.com",
    messagingSenderId: "71163325861",
    appId: "1:71163325861:web:ec80894eb1b6950528cc4c",
    measurementId: "G-KHB2WNH3R0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const registerWithEmailAndPassword = async ({ username, email, password }) => {
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          username,
          authProvider: "local",
          email,
      })
  } catch (err) {
      console.error(err)
      alert(err.message)
  }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

const currentAuthenticatedUser = async () => {
  let myUser

  try {
    myUser = await auth.currentUser
      // CognitoUser = await Auth.currentAuthenticatedUser()
  } catch (e) {
      // sign out will clear all existing cognito keys from localStorage
      await logout()
      myUser = null
  }

  console.log("Current user is:")
  console.log(myUser)
  return myUser
}

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    currentAuthenticatedUser,
};