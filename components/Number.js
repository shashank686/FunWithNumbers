import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "./Card";
import Color from "../constants/color";
import color from "../constants/color";

const Number = (props) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.number}>{props.children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  number: {
    color: color.primary,
    fontSize: 22,
  },
  inputContainer: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Number;
