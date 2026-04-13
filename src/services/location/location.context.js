import React, { createContext, useState, useEffect } from "react";
import { locationRequest } from "./location.service";
//default values in create context matter only when no provider is found in the tree
// if a provider is found, the values in the provider will be used instead of the default values
// this is useful for testing or when you want to provide default values for the context
// but still allow the values to be overridden by a provider higher in the tree
export const LocationContext = createContext({
  location: {},
  search: () => null,
  isLoading: false,
  error: null,
  keyword: "",
});

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco"); // to be used as default search term
  const [location, setLocation] = useState({}); //default location == san francisco
  //const [location, setLocation] = useState(''); //default location == san francisco, we set instead useEffet in the search bar component to handle the default search
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSearch = (SearchLocation) => {
    setIsLoading(true);
    setKeyword(SearchLocation);
  };
  useEffect(() => {
    if (!keyword.length) return; //prevents empty search or Api call with no search string
    const retrieveLocation = async () => {
      try {
        const loc = await locationRequest(keyword.toLowerCase());
        // console.log('location in location.context.js:', loc);
        setLocation(loc);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        console.log("wrong search term==================", err);
        setError(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    retrieveLocation();
  }, [keyword]);

  const value = {
    location, // shorthand for location: location
    isLoading,
    error,
    keyword,
    search: onSearch,
  };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
