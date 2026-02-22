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

const RegisterScreen = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  //const [isSubmit, setIsSubmit] = useState(false); // this state is used to activate or desactivate login button
  const {
    isLoading,
    registerUserEmailPassword,
    errorMessage,
    setErrorMessage,
    successMessage,
  } = useContext(AuthenticationContext);
  console.log("typeof error:", typeof errorMessage);
  console.log("error last signin:", errorMessage);
  const handleRegisterUser = () => {
    // Handle form submission, e.g., send data to an AP
    //setIsSubmit(true);
    if (password !== repeatedPassword) {
      setErrorMessage("Error:passwords do no match as stated");

      setPassword("");
      setRepeatedPassword("");
      //setIsSubmit(false);
      return;
    }

    registerUserEmailPassword(email, password); // running and async function
    //setIsSubmit(false);
    /* registerUserEmailPassword(email, password).then(() => {
      (setIsSubmit(false),
        setSuccessMessage("User Sucessfully Created"),
        setErrorMessage(""));
    }) */
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
        <Spacer size="large" />
        <AuthInput
          mode="outlined"
          label="repeat Password"
          placeholder="repeat Password"
          value={repeatedPassword}
          textContentType="password"
          autoCapitalize="none"
          onChangeText={(passwd) => setRepeatedPassword(passwd)}
          secureTextEntry={true}
        />
        {errorMessage && (
          <ErrorContainer size="large">
            <Text variant="error">{errorMessage}</Text>
          </ErrorContainer>
        )}
        {successMessage && (
          <ErrorContainer size="large">
            <Text variant="success">{successMessage}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />

        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            //disabled={isSubmit ? true : false}
            onPress={handleRegisterUser}
          >
            Register
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

export default RegisterScreen;
