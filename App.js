import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./components/GameScreen";
export default function App() {
  const [userInput, setUserInput] = useState();
  const startGameHandler = (selected) => {
    setUserInput(selected);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userInput) {
    content = (
      <GameScreen userChoice={userInput} onStartGame={startGameHandler} />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Numbers" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
