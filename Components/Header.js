import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function header({ title }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.htext}>{title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.logoColor,
    height: parameters.headerHeight,
    alignItems: "center",
    justifyContent: "flex-start",
    width:width,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },
  htext: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
    paddingLeft: 30,
  },
});
