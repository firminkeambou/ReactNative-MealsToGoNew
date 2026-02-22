import React, { useState, createContext, useEffect } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  mapAuthCodeToMessage,
  onAuthStateChangedListener,
} from "./authentication.service";
export const AuthenticationContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMessage: "",
  successMessage: "",
});
//const user ="freeman" console.log(!!user).  // force user in boolean
const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((usr) => {
      //console.log('User state changed:', user);
      if (usr) {
        setUser(usr);
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        setErrorMessage("");
        setSuccessMessage("");
      }
    });
    return unsubscribe; // Cleanup function to unsubscribe from the listener when the component unmounts
  }, []);

  //the below function is declared because, useEffect does not accept async function directly
  const loginEmailPassword = async (email, password) => {
    setIsLoading(true);
    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      //userCredential.;
      console.log("userCredential::", userCredential);
      console.log(" is Authenticated 1", isAuthenticated);
      if (userCredential) {
        const { user } = userCredential;
        //console.log(user);
        setUser(user);
        setIsAuthenticated(true);
        setIsLoading(false);
        console.log(" is Authenticated 2", isAuthenticated);
      }
    } catch (error) {
      setIsLoading(false);
      setUser(null);
      setIsAuthenticated(false);
      setErrorMessage(mapAuthCodeToMessage(error.code));
      console.log("Error signing in", error);
    }
  };

  const registerUserEmailPassword = async (
    email,
    password,
    //repeatedPassword,
  ) => {
    setIsLoading(true);
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      //userCredential.;
      console.log("userCredential created user:", userCredential);
      //console.log(" is Authenticated 1", isAuthenticated);
      if (userCredential) {
        const { user } = userCredential;
        //console.log(user);
        setUser(user);
        setIsAuthenticated(true);
        setIsLoading(false);
        setSuccessMessage("User Sucessfully Created");
        setErrorMessage("");
        //setIsAuthenticated(true);
        setIsLoading(false);

        //console.log(" is Authenticated 2", isAuthenticated);
      }
    } catch (error) {
      setIsLoading(false);
      setUser(null);
      setSuccessMessage("");
      //setIsAuthenticated(false);
      setErrorMessage(mapAuthCodeToMessage(error.code));
      console.log("Error registering", error);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated,
    errorMessage,
    successMessage,
    setErrorMessage,
    loginEmailPassword,
    registerUserEmailPassword,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
