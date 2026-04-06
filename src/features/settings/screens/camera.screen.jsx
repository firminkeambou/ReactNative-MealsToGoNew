import React from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/firebase/authentication.context";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spacer from "@/src/components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CameraScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthenticationContext);

  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  console.log("Camera Ref:", cameraRef, permission);
  if (!permission) return <View />; // Loading permissions

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Path to the saved image cache
      await AsyncStorage.setItem(`${user.uid}_photo`, photo.uri);
      navigation.goBack(); // Navigate back to the previous screen (SettingsScreen)
    }
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing={facing}
        ref={cameraRef}
      ></CameraView>
      {/* 2. Your Overlay (Sibling with absolute positioning) */}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={toggleCameraFacing}
        >
        <Text style={styles.text1}>{facing=== "back" ? "front" : "back"}</Text>
        </TouchableOpacity>
       
        <Spacer />
        <Spacer />
        <TouchableOpacity
          style={styles.captureButton}
          onPress={takePicture}
        >
        <Text style={styles.text}>snap</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  //camera: { flex: 1 },
  overlay: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    //backgroundColor: "#fff",
    backgroundColor: "#2a4b3e",
  },
  /* buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  } */
  /*  button: { flex: 1, alignSelf: "flex-end", alignItems: "center" }, */
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    alignSelf: "center",
    top: 18,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    alignSelf: "center",
    top: 20,
  },
});
