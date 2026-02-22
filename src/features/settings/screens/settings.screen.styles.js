import styled from "styled-components/native";
import { List } from "react-native-paper";
import { FlatList } from "react-native";
import SafeArea from "@/src/components/utility/safe-area.component";
export const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
export const BasicText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h4};
  color: ${(props) => props.theme.colors.text.error};
  align-self: center;
`;
export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
  padding-top: ${(props) => props.theme.space[4]};
`;
export const FavouritesArea = styled(SafeArea)`
  flex: 1;
  align-items: left;
  justify-content: center;
`;
