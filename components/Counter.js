import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
import Color from "../constants/color";
import color from "../constants/color";
import Number from "./Number";
const Counter = (props) => {

  
  return (
    <Card style={styles.styleCounter}>
      <Text>Number selected is </Text>
      <Number>{props.children}</Number>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: color.accent,
          height: "25%",
          padding: 10,
          borderRadius: 6,
        }}
        onPress={() => props.onStartGame(props.children)}
      >
        <Text style={{ textAlign: "center" }}>START GAME</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  styleCounter: {
    marginTop: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "40%",
  },
});

export default Counter;
