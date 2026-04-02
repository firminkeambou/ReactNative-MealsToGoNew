import React, { useContext, useEffect, useState } from "react";
//import { Button } from "react-native";
import { SettingsItem, AvatarContainer } from "./settings.screen.styles";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native"; //allows to implement the click with a touch
import SafeArea from "@/src/components/utility/safe-area.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOutUser } from "@/src/services/authentication/firebase/authentication.service";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "@/src/services/authentication/firebase/authentication.context";
import { Text } from "@/src/components/typography/text.component";
import Spacer from "@/src/components/spacer/spacer.component";
import { useFocusEffect } from "expo-router";
const SettingsScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthenticationContext);
  const [profilePhoto, setProfilePhoto] = useState(null);
  //navigate("Favourites") {/** usually in parantheses is the name of the screen */}
  // rendering the picture using useEffect
  //useFocusEffect rather than useEffect because we want to load the profile picture every time we navigate to the settings screen, not just on the initial render. useFocusEffect runs the effect every time the screen comes into focus, ensuring that we always have the latest profile picture displayed.
  useFocusEffect(() => {
    const loadProfilePicture = async () => {
      try {
        const photoUri = await AsyncStorage.getItem(`${user.uid}_photo`);
        if (photoUri) {
          console.log("Loaded photo URI:", photoUri);
          setProfilePhoto(photoUri); // Set the loaded photo URI to state
        }
      } catch (error) {
        console.log("Error loading profile picture:", error);
      }
    };
    loadProfilePicture();
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!profilePhoto ? (
            <Avatar.Icon size={80} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={80}
              source={{ uri: profilePhoto }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
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
