import styled from 'styled-components/native';
import MapView from 'react-native-maps';
export const BasicText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h2};
`;
export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export const MapContainer = styled.View`
  flex: 1;
`;
export const SomeText = styled.Text`
  font-size: 18px;
`;
