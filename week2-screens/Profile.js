import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../global/AysyncStorage";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const Profile = () => {
  const [userData, setUserData] = useState({ username: '', email: '' });
  const navigation = useNavigation();

  // Fetch user data from AsyncStorage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  // Logout function to clear AsyncStorage and navigate to Login screen
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      // Remove 'onboarded' item from storage
      await removeItem("onboarded");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout", error);
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.mainText}>
        <FontAwesome name="user-circle-o" size={120} color="#d73d07" />
        {/* Display user name and email from state */}
        <Text style={styles.name}>{userData.username}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <SimpleLineIcons
            name="logout"
            size={28}
            color="#f4ebca"
            style={styles.icon}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

// Styles for the Profile screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.logoBackground,
  },
  header: {
    backgroundColor: colors.logoColor,
    height: height * 0.08,
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    fontSize: height * 0.03,
    fontWeight: "bold",
    color: colors.logoBackground,
    marginLeft: width * 0.05,
  },
  mainText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.05,
  },
  name: {
    fontSize: height * 0.025,
    fontWeight: "bold",
    color: "#000",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
  },
  email: {
    fontSize: height * 0.02,
    fontWeight: "600",
    marginTop: height * 0.005,
  },
  logoutContainer: {
    marginTop: height * 0.05,
  },
  logout: {
    backgroundColor: colors.logoColor,
    width: width * 0.95,
    height: height * 0.07,
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: 'center'
  },
  logoutText: {
    fontSize: height * 0.03,
    fontWeight: "bold",
    marginLeft: width * 0.05,
    color: colors.logoBackground
  },
  icon: {
    marginLeft: width * 0.05
  }
});
