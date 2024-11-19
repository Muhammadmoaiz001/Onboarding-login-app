import React from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors,parameters } from '../global/styles';
import Button from "../Components/Button";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const Forgotpass = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle password reset logic
        console.log("Password reset email sent to:", values.email);
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
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.instructions}>
            Enter your email address to reset your password.
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.inputField}
            keyboardType="email-address"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <Button
            title="Reset Password"
            onPress={handleSubmit}
            style={parameters.styledButton2}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    padding: 20,
    backgroundColor: colors.logoBackground,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  inputField: {
      width: width * 0.9,
      backgroundColor: colors.white,
      margin: 10,
      borderRadius: 30,
      height: height * 0.07,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Forgotpass;