import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
//import { FadeIn } from "react-native-reanimated";
const FadeInView = ({ duration = 2000, ...props }) => {
  // 1500 is in milli seconds
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
