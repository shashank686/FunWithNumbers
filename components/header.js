import React from "react";
import { Text, View, StyleSheet } from "react-native";
import color from "../constants/color";
const Header = (props) => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 36,
    height: 90,
    width: "100%",
    backgroundColor: color.primary,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    color: "black",
  },
});
export default Header;
