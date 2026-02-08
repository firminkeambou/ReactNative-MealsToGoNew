import React, { useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContainer } from './search-bar.styles';
import { LocationContext } from '../../services/location/location.context';
const SearchBar = () => {
  const { keyword, search } = React.useContext(LocationContext); //keyword is the default value set in location context
  const [searchTerm, setSearchTerm] = React.useState(keyword);
  // the below useeffect allows us to have the very first location and therefore restaurants based on this location
  // the below useeffect allows us to have the very first location and therefore restaurants based on this location
  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
        onSubmitEditing={() => {
          console.log('searchTerm in search-bar.component.js:', searchTerm);

          search(searchTerm);
        }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
