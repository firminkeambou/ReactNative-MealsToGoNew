import Spacer from "@/src/components/spacer/spacer.component";
import React, { useState, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
//import { Searchbar } from 'react-native-paper';
//import styled from 'styled-components/native';
import SafeArea from "@/src/components/utility/safe-area.component";
import { RestaurantsContext } from "@/src/services/restaurants/restaurants.context";
import { FavouritesContext } from "@/src/services/favourites/favourites.context";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
//import { FavouritesContext } from "@/src/services/favourites/favourites.context";
//import { LocationContext } from '../../../services/location/location.context';
import styled from "styled-components/native";
import Loading from "../../../components/activity-indicator/activity-indicator.component";
import FadeInView from "@/src/components/animations/fade.animation";
import RestaurantInfoCard from "../components/restaurants-info/restautant-info-card.component";

import SearchBar from "../../../components/search-bar/search-bar.component";
//import { SearchContainer } from './restaurant.screen.styles';
//import { locationRequest } from '../../../services/location/location.service';
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const RestaurantsScreen = ({ navigation }) => {
  // destructure navigation from props made available by stack.navigator
  const { restaurants, isLoading } = React.useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  //const { favourites } = React.useContext(FavouritesContext);

  //console.log('RestaurantsScreen navigation prop:', navigation);
  //console.log('Location in restaurants screen:', location);
  //console.log('restaurants from restaurants.screen.js Context:', restaurants);
  //console.log('isLoading:', isLoading);
  //locationRequest(); //testing out location.context
  //console.log('Location in restaurants screen.js:', location);
  return (
    <SafeArea>
      {/**contentContainerStyle={{ padding: 16 }} apllies holistically meaning the whole FlatList component instead of a single one, instead, use styled wtith "attrs functions: unfortunately, this doesn't really change anything" */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar
            onFafouritesToggle={() => setIsToggled(!isToggled)}
            isFavoutitesToggle={isToggled}
          />
          {isToggled && <FavouritesBar favourites={favourites} />}
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              //console.log('restaurant+++++++++++==========++++++:', item);
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                      })
                    }
                  >
                    <Spacer position="bottom" size="large">
                      <FadeInView>
                        <RestaurantInfoCard restaurant={item} />
                      </FadeInView>
                    </Spacer>
                  </TouchableOpacity>
                </>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
export default RestaurantsScreen;
/*
this section is no longer needed as we are using styled-components
and the "style" property is removed as well
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 40 : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
*/

//always recommended to set flex: 1 for "SafeAreaView", so it considers the whole screen
