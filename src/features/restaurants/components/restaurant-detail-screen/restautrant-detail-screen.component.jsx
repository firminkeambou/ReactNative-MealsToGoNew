//import styled from 'styled-components/native';
import Spacer from "@/src/components/spacer/spacer.component";
import SafeArea from "@/src/components/utility/safe-area.component";
import { ScrollView } from "react-native";
import RestaurantInfoCard from "../../components/restaurants-info/restautant-info-card.component";
import StaticMenu from "./restaurant-detail-static-menu.component";
const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params; //destructure restaurant from route.params

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <Spacer position="top" size="medium">
          <StaticMenu />
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
