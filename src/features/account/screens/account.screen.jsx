import React, { useRef } from "react";

import Spacer from "@/src/components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../account.styles";
const AccountScreen = ({ navigation }) => {
  //const animation = useRef < LottieView > null;
  //console.log("animation", animation);
  return (
    <AccountBackground>
      <AccountCover />

      <AnimationWrapper
        autoPlay
        loop
        key="animation"
        resizeMode="cover"
        source={require("../../../../assets.old/images/watermelon.json")}
      />

      <Title>Meals To Go New</Title>
      <AccountContainer>
        {/* "contained" mode button (high emphasis with background color) */}
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("login")}
          icon="lock-open-outline" // You can add an icon
          loading={false} // Show a loading indicator
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("register")}
          icon="email" // You can add an icon
          loading={false} // Show a loading indicator
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
