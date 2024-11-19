import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors, parameters } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../global/AysyncStorage";
import Button from "../Components/Button";
import Header from "../Components/Header";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Toggle password visibility
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  // Validation schema for form inputs
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Navigate to Home on successful sign up
        navigation.navigate("Home");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Header title={"Sign Up"} />

          <View style={styles.TextContainer}>
            <Text style={styles.MainText}>Getting Started</Text>
            <Text style={styles.Text}>Create Account to continue</Text>
          </View>
          <View style={styles.TextInputContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.TextInputView}>
                {/* Username Input */}
                <TextInput
                  placeholder="Enter Your Name"
                  placeholderTextColor={"black"}
                  style={styles.inputField}
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
                {/* Email Input */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"#000"}
                  style={styles.inputField}
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                {/* Password Input */}
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#000"}
                  style={styles.inputField}
                  secureTextEntry={secureTextEntry}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.passwordTextView}>
                {/* Toggle password visibility */}
                <TouchableOpacity onPress={toggleSecureEntry}>
                  <Text style={styles.passwordText}>
                    {secureTextEntry ? "Show Password" : "Hide Password"}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Sign Up Button */}
              <Button title={"Sign Up"} onPress={handleSubmit} style={parameters.styledButton} />
              <View style={styles.OrContainer}>
                <View style={styles.line}></View>
                <Text style={styles.OR}>OR</Text>
                <View style={styles.line}></View>
              </View>
              {/* Social Media Sign Up Options */}
              <View style={styles.LogoMainContainer}>
                <View style={styles.LogosContainer}>
                  <Image
                    source={require("../assets/google.png")}
                    style={styles.Logos}
                  />
                </View>
                <View style={styles.LogosContainer}>
                  <Image
                    source={require("../assets/facebook.png")}
                    style={styles.Logos}
                  />
                </View>
              </View>
              <View style={styles.NewTextContainer}>
                <Text style={styles.NewText}>Already have an account?</Text>
              </View>
              {/* Navigate to Sign In screen */}
              <View style={styles.CreateContainer}>
                <TouchableOpacity
                  style={styles.Createbtn}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.CreatebtnText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;

// Styles for the SignUp screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.logoBackground,
  },
  TextContainer: {
    marginLeft: width * 0.05,
    width: width,
    marginTop: height * 0.03,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingBottom: height * 0.1,
  },
  MainText: {
    fontSize: height * 0.035,
    color: colors.black,
    fontWeight: "bold",
  },
  Text: {
    fontSize: height * 0.03,
    color: colors.black,
    fontWeight: "300",
  },
  TextInputContainer: {
    backgroundColor: colors.logoColor,
    flex: 1,
    marginTop: height * 0.03,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  inputField: {
    width: width * 0.9,
    backgroundColor: colors.logoBackground,
    margin: 10,
    borderRadius: 30,
    height: height * 0.07,
  },
  TextInputView: {
    marginTop: 30,
  },
  passwordTextView: {
    width: width * 0.9,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: height * 0.05,
  },
  passwordText: {
    fontWeight: "bold",
    color: "white",
  },
  OrContainer: {
    height: height * 0.04,
    flexDirection: "row",
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: height * 0.03,
  },
  line: {
    height: height * 0.005,
    borderWidth: 2,
    borderColor: colors.logoBackground,
    width: width * 0.3,
  },
  OR: {
    fontSize: height * 0.02,
    color: colors.logoBackground,
  },
  Logos: {
    height: height * 0.06,
    width: width * 0.12,
  },
  LogoMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: width * 0.9,
  },
  LogosContainer: {
    height: height * 0.08,
    width: width * 0.16,
    backgroundColor: colors.logoBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: height * 0.04,
    marginTop: height * 0.02,
  },
  NewTextContainer: {
    justifyContent: "flex-start",
    width: width * 1.0,
    marginLeft: width * 0.12,
    marginTop: height * 0.02,
  },
  NewText: {
    fontSize: height * 0.023,
    color: colors.logoBackground,
    fontWeight: "bold",
  },
  CreateContainer: {
    width: width * 1.0,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: width * 0.12,
  },
  Createbtn: {
    width: width * 0.35,
    height: height * 0.06,
    backgroundColor: colors.logoBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.03,
    marginTop: height * 0.02,
  },
  CreatebtnText: {
    fontSize: height * 0.017,
    color: colors.black,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
  },
});
