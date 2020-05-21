import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalImput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal("");
    props.onAddGoal(enteredGoal);
  };

  return (
    <Modal visible={props.addMode} animationType="slide">
      <View style={styles.modal}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsBox}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" color="red" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: { width: 100 },
  buttonsBox: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default GoalImput;
