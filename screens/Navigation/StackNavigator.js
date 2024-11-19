import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../Onboarding";
import Login from "../Login";
import SignUp from "../SignUp";
import Home from "../Home";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Forgotpass from "../Forgotpass";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    const checkIfAlreadyOnboarded = async () => {
      try {
        let onboarded = await AsyncStorage.getItem("onboarded");
        if (onboarded === '1') {
          // hide onboarding
          setShowOnboarding(false);
        } else {
          // show onboarding
          setShowOnboarding(true);
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
      }
    };

    checkIfAlreadyOnboarded();
  }, []);

  if (showOnboarding === null) {
    return null; // or a loading indicator
  }

  return (
    <Stack.Navigator
      initialRouteName={showOnboarding ? "OnboardingScreen" : "Login"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnboardingScreen" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPass" component={Forgotpass} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
