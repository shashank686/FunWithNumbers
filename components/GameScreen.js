import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  BackHandler,
} from "react-native";
import Card from "./Card";
import Number from "./Number";
import GameOver from "./GameOver";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [selectedNumber, setSelectedNumber] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const [gameOver, isGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);
  let hValue = useRef(100);
  let lValue = useRef(1);

  BackHandler.addEventListener("hardwareBackPress", function () {
    props.onStartGame();
    return true;
  });

  const GoAgain = () => {
    props.onStartGame();
  };
  const randomHandler = (value, direction) => {
    setRounds((rouns) => rounds + 1);
    if (
      (value < props.userChoice && direction === "lower") ||
      (value > props.userChoice && direction === "high")
    ) {
      Alert.alert(
        "Sorry",
        "But You are a Lier!!",
        [
          {
            text: "Okay",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    } else {
      if (direction === "lower") {
        hValue.current = value;
      } else lValue.current = value;

      const Gotcha = generateRandomBetween(
        lValue.current,
        hValue.current,
        value
      );

      if (Gotcha === props.userChoice) {
        isGameOver(true);
        return;
      }
      setSelectedNumber(Gotcha);
    }
  };

  return (
    <React.Fragment>
      {gameOver === false ? (
        <View style={styles.screen}>
          <Text>Opponent Guess</Text>
          <Number>{selectedNumber}</Number>
          <Card style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="lower"
                onPress={() => randomHandler(selectedNumber, "lower")}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="greater"
                onPress={() => randomHandler(selectedNumber, "high")}
              />
            </View>
          </Card>
        </View>
      ) : (
        <GameOver answer={props.userChoice} rounds={rounds} GoAgain={GoAgain} />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "70%",
    height: "20%",
  },

  button: {
    width: "40%",
    justifyContent: "space-around",
  },
});
export default GameScreen;
