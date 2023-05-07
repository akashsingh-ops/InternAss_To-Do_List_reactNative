import {
  StyleSheet,
  TextInput,
  Button,
  Modal,
  View,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnterGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnterGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnterGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal1.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"green"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    backgroundColor: "#311b6b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,

    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "transparent",
  },
  buttonContainer: { flexDirection: "row", marginTop: 16 },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
    padding: 10,
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
  },
  button: {
    width: 100,

    marginHorizontal: 8,
  },
});
