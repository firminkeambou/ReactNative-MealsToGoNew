import React from 'react';
import { ActivityIndicator } from 'react-native';

//import styled from 'styled-components/native';
//import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LoadingContainer } from './activity-indicator.styles';
const Loading = () => (
  <LoadingContainer>
    <ActivityIndicator size="large" color="#ff0000ff" />
  </LoadingContainer>
);

export default Loading;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
*/
