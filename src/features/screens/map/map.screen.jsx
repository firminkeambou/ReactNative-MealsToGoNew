import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import {
  Marker,
  Callout,
  CalloutSubview,
  PROVIDER_GOOGLE,
} from "react-native-maps";
//import MapView from 'react-native-maps';
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapCallout from "../../../components/map-callout-component/map.callout.component";
import RestaurantDetailScreen from "../../restaurant-detail-screen/restautrant-detail-screen.component";
//import SafeArea from '@/src/components/utility/safe-area.component';
//import SafeArea from '../../../../components/utility/safe-area.component';
import { Map, MapContainer } from "./map.screen.styles";
import MapSearchBar from "../../../components/map-search-bar/map-search-bar.component";

const MapScreen = () => {
  // "navigation" is available because "MapScreen" belongs to nav tab stack
  const navigation = useNavigation();
  console.log("mapPrpos", navigation.getState());
  const { location } = useContext(LocationContext);
  const { viewport, lat, lng } = location;
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = React.useState(0);

  //const { viewport } = location;
  console.log("viewport in map.screen.jsx:", viewport, "ffff", lat, lng);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDeltaCalc = northeastLat - southwestLat;
    setLatDelta(latDeltaCalc);
    //console.log('restaurants in map.screen.jsx:', restaurants);
  }, [location]);
  //<MapSearchBar />

  return (
    <>
      <MapContainer>
        <Map
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02, // default fixed value for zoom level
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
                title={restaurant.name}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("Restaurant", {
                      screen: "RestaurantDetail",
                      params: { restaurant: restaurant }, // Optional: pass params to the target screen
                    })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
        </Map>
      </MapContainer>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
