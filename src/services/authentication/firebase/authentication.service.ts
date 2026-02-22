import {
  getAuth, //get the firebase instance we are working with
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  NextOrObserver,
} from "firebase/auth";
import { app } from "./firebase.config";
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

const auth = getAuth(app);
//sign in user
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return; // checks if the email or password is provided, if not, it returns undefined
  return await signInWithEmailAndPassword(auth, email, password); // creates a new user with the provided email and password using Firebase Authentication
};

//register new user
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return; // checks if the email and password are provided, if not, it returns undefined
  return await createUserWithEmailAndPassword(auth, email, password); // creates a new user with the provided email and password using Firebase Authentication
};
//  dealing with firebase errors

export const mapAuthCodeToMessage = (authCode: string) => {
  switch (authCode) {
    case "auth/invalid-email":
      return "The email address is invalid.";
    case "auth/invalid-credential":
      return "wrong Email or password";
    case "auth/email-already-in-use":
      return " Email Address already in use";
    case "auth/network-request-failed ":
      return "Network unaccessible ";

    // Add many more authCode mappings here from the [Firebase Authentication documentation](https://firebase.google.com/docs/auth/admin/errors)
    default:
      return `${authCode} An unexpected error occurred. Please try again.`;
  }
};

// hadling session persistence in firebase

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

//signout
export const signOutUser = async () => await signOut(auth);
