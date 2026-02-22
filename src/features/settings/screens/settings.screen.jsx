import React, { useContext } from "react";
//import { Button } from "react-native";
import { SettingsItem, AvatarContainer } from "./settings.screen.styles";
import { List, Avatar } from "react-native-paper";
import SafeArea from "@/src/components/utility/safe-area.component";
import { signOutUser } from "@/src/services/authentication/firebase/authentication.service";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "@/src/services/authentication/firebase/authentication.context";
import { Text } from "@/src/components/typography/text.component";
import Spacer from "@/src/components/spacer/spacer.component";
const SettingsScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={80} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          onPress={() => navigation.navigate("Favourites")}
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingsItem
          title="Logout"
          onPress={signOutUser}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
