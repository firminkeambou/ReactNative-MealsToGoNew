import React from 'react';
//import styled from 'styled-components/native';
import SafeArea from '@/src/components/utility/safe-area.component';
import RestaurantInfoCard from '../restaurants-info/restautant-info-card.component';
import Spacer from '@/src/components/spacer/spacer.component';
import StaticMenu from './restaurant-detail-static-menu.component';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
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
