import React, { createContext, useState, useEffect, useContext } from 'react';
import { restaurantsRequest } from './restaurants.service';
import { LocationContext } from '../location/location.context';
export const RestaurantsContext = createContext({
  restaurants: [],
});

export const RestaurantsContextProvider = ({ children }) => {
  const {
    location: { latLongString },
  } = useContext(LocationContext);
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //const { lat, lng } = location;
  /* console.log(
    'location in restaurants.context.js ligne 15 useEffect:',
    location
  ); */
  //console.log('lat,lng in restaurants.context.js useEffect:', lat, lng);

  useEffect(() => {
    // Fetch data or perform any side effects here
    const retrieveRestaurants = async (loc) => {
      setIsLoading(true);
      setRestaurants([]);

      try {
        const data = await restaurantsRequest(loc);
        setRestaurants(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    // artificial delay for testing loading indicator
    if (latLongString) {
      // latLongString is defined latLongString.length > 0
      /*      console.log(
        'latLongString in restaurants.context.js before retrieveRestaurants:'
      ); */
      retrieveRestaurants(latLongString); //location (latitude,longitude)
    }
  }, [latLongString]); //[location]
  const value = {
    restaurants, // shorthand for restaurants: restaurants
    isLoading,
    error,
  };
  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
