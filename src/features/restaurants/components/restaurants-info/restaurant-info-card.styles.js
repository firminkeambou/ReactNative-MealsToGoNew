import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  alignitems: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

/* Title no longer needed as we defined our own text
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};

  color: ${(props) => props.theme.colors.ui.primary};
`;
*/
