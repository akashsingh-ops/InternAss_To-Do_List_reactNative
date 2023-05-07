// import { StyleSheet } from "react-native";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#170347" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.addText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: "#4008CA",
  },
  pressedItem: {
    opacity: 0.5,
  },
  addText: {
    padding: 8,
    color: "white",
  },
});
