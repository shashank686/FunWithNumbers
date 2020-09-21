import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "./Card";
import color from "../constants/color";

const GameOver = (props) => {
  return (
    <Card style={styles.cardStyle}>
      <Text>Got you!!</Text>
  <Text> The value was : {props.answer}</Text>
      <Text>Total Rounds : {props.rounds}</Text>
      <View style={{ padding: 10 }}>
        <Button title="Go again!!" onPress={() => props.GoAgain()} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    alignItems: "center",
    margin: 20,
  },
});

export default GameOver;
