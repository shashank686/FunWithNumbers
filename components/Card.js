import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.Card, ...props.style }}>{props.children}</View>
    // what basically we have done is cloning the style object and same cloning the style that we get from prop
    // and simple concanating  both of it  boom we have a new object and we used it
  );
};

const styles = StyleSheet.create({
  Card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
