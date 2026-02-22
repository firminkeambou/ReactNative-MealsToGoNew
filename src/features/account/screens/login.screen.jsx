import React, { useState, useContext } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper"; // useTheme to replace "colors"
import Spacer from "@/src/components/spacer/spacer.component";
import { Text } from "@/src/components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountLoginContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../account.styles";
import { AuthenticationContext } from "@/src/services/authentication/firebase/authentication.context";

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isSubmit, setIsSubmit] = useState(false); // this state is used to activate or desactivate login button
  const { loginEmailPassword, errorMessage, isLoading } = useContext(
    AuthenticationContext,
  );
  console.log("typeof error:", typeof errorMessage);
  console.log("error last signin:", errorMessage);
  const handleLogin = () => {
    // Handle form submission, e.g., send data to an AP
    //setIsSubmit(true);
    loginEmailPassword(email, password);
    //.then(() => setIsSubmit(false));
  };
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go New</Title>
      <AccountLoginContainer>
        <AuthInput
          mode="outlined"
          label="E-mail"
          placeholder="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer size="large" />
        <AuthInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          onChangeText={(passwd) => setPassword(passwd)}
          secureTextEntry={true}
        />
        {errorMessage && (
          <ErrorContainer size="large">
            <Text variant="error">{errorMessage}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            //disabled={isSubmit ? true : false}
            onPress={handleLogin}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.primary} />
        )}
      </AccountLoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
export default LoginScreen;

/**
  {errorMessage.length && (
<Spacer size="large">
  <Text variant="error">{errorMessage}</Text>
</Spacer>
)}
 */
