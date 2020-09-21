import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImagePropTypes,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  BackHandler,
} from "react-native";
import Card from "../components/Card";
import color from "../constants/color";
import MyInput from "../components/MyInput";
import Counter from "../components/Counter";

const StartGameScreen = (props) => {
  const [EnteredValue, setEnteredValue] = useState("");
  const [confirmedStatus, setConfirmedStatus] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  let content = <Text></Text>;

  const onExit = () => {
    BackHandler.exitApp();
    return true;
  };
  const InputHandler = (data) => {
    setEnteredValue(data.replace(/[^0-9]/g, ""));
    setConfirmedStatus(false);
  };

  const ResetHandler = () => {
    setEnteredValue("");
    setConfirmedStatus(false);
  };
  const ConfirmHandler = () => {
    if (parseInt(EnteredValue) < 10 || EnteredValue.length === 0) {
      Alert.alert(
        "Invalid Entry",
        "Number should be between 10 to 99",
        [
          {
            text: "Okay",
            style: "cancel",
            onPress: ResetHandler,
          },
        ],
        { cancelable: false }
      );

      return;
    }

    setConfirmedStatus(true);
    setEnteredValue(""); // this will not rendered when this function will be triggered will be rendered
    //in the next cycle thats why enteredValue will not be empty
    setSelectedNumber(parseInt(EnteredValue));

    Keyboard.dismiss();
  };

  if (confirmedStatus) {
    content = (
      <Counter onStartGame={props.onStartGame}>{selectedNumber}</Counter>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start A New Game </Text>
        <Card style={styles.inputContainer}>
          <View style={{ paddingBottom: 10 }}>
            <Text>Enter The Number </Text>
          </View>

          <MyInput
            style={styles.textinput}
            placeholder="Go!!"
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            maxLength={2}
            onChangeText={InputHandler}
            value={EnteredValue}
          />
          <View style={styles.buttonParentView}>
            <View style={styles.buttonChildrenView}>
              <TouchableOpacity
                style={{
                  backgroundColor: color.primary,
                  padding: 10,
                  borderRadius: 10,
                  width: "70%",
                }}
              >
                <Text style={{ textAlign: "center" }} onPress={ResetHandler}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonChildrenView}>
              <TouchableOpacity
                style={{
                  backgroundColor: color.accent,
                  borderRadius: 6,
                  padding: 10,
                }}
                onPress={ConfirmHandler}
              >
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonParentView}>
            <View style={styles.buttonChildrenView}>
              <TouchableOpacity
                style={{
                  backgroundColor: "grey",
                  borderRadius: 6,
                  padding: 10,
                  width: "38%",
                }}
                onPress={onExit}
              >
                <Text style={{ textAlign: "center" }}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },

  buttonParentView: {
    width: "80%", // this is relative  60 % of the parent view width we cant use flex 1 here because view didnt
    // have acess to whole screnn part it has cretain amount of screen  acess only thts why we take a width here
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    margin: 5,
  },

  buttonChildrenView: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  textinput: {
    width: "20%",
    textAlign: "center",
  },
});

export default StartGameScreen;
