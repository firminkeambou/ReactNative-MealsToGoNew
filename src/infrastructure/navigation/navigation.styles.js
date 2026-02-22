import styled from "styled-components";
import { View } from "react-native";

export const AppNavigationContainer = styled(View)`
  flex: 1;

  background-color: ${(props) => props.theme.colors.bg.primary};
`;
