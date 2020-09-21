import React, { useState } from "react";

import { TextInput, StyleSheet, ImagePropTypes } from "react-native";

const MyInput = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.textinput, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 30,
    textAlign: "center",
  },
});

export default MyInput;
