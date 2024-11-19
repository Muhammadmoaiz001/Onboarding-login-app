import { Dimensions, StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../global/AysyncStorage";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    setItem('onboarded','1')
    navigation.navigate("Login");
  };
const DoneButton=({...props})=>{
  return(
    <TouchableOpacity style={styles.BtnContainer} {...props}>
      <Text style={styles.BtnText}>
        Get Started
      </Text>
    </TouchableOpacity>
  )

}

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        bottomBarHighlight={false}
        containerStyles={{paddingHorizontal:15}}
        pages={[
          {
            backgroundColor: "#f4ebca",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/animation1.json")}
                  autoPlay
                  loop
                  style={styles.lotti}
                />
              </View>
            ),
            title: "Fast Delivery",
            subtitle: "Quick, dependable deliveries to your doorstep.",
          },
          {
            backgroundColor: "#55AFE7",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/animation2.json")}
                  autoPlay
                  loop
                  style={styles.lotti}
                />
              </View>
            ),
            title: "Order Tracking",
            subtitle: "Live updates from dispatch to delivery.",
          },
          {
            backgroundColor: "#d73d07",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/animation3.json")}
                  autoPlay
                  loop
                  style={styles.lotti}
                />
              </View>
            ),
            title: "Great Deals",
            subtitle: "Unlock offers and earn rewards.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lotti: {
    height: width * 0.9,
    width: width,
  },
  BtnContainer: {
    backgroundColor: "#fff",
    padding: width * 0.02,
    marginRight: width * 0.01,
    borderRadius: 20,
  },
  BtnText:{
    fontWeight:'bold'
  }
});
