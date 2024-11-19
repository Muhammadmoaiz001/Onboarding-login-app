import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { parameters } from "../global/styles";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Button = ({title,onPress,style}) => {
  return (
    <View>
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={parameters.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
