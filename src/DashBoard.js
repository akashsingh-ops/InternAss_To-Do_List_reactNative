import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";
import GoalInput from "../component/GoalInput";
import GoalItem from "../component/GoalItem";
import { useState, useEffect } from "react";
import { firebase } from "../config";

export default function () {
  const [name, setName] = useState("");
  // user authen
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        console.log("hhhhh");
        if (snapshot.exists) {
          setName(snapshot.data());
          console.log("hhhhh");
        } else {
          console.log("user doesn`t exist");
        }
      });
  }, []);

  //
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);
  function startAddGoalHanlder() {
    setModalIsVisible(true);
  }
  function endGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }
  function deleteHandler(id) {
    // console.log("Item Deleted!");
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <TouchableOpacity
        onPress={() => firebase.auth().signOut()}
        style={{
          borderWidth: 1,
          borderColor: "#026efd",
          width: 110,
          padding: 5,
          borderRadius: 10,
          alignContent: "center",
          alignItems: "center",
          marginBottom: 15,
          backgroundColor: "honeydew",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sign Out</Text>
      </TouchableOpacity>

      <Text
        style={{
          paddingTop: 1,
          alignSelf: "center",
          color: "white",
          fontSize: 20,
          backgroundColor: "#4008CA",
          padding: 10,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        To-Do-App
      </Text>
      <Button
        title="Add New Goal "
        backgroundColor="#4008CA"
        onPress={startAddGoalHanlder}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30,
    backgroundColor: "#E7F8FA",
  },

  goalsContainer: {
    flex: 4,
  },
  button: {
    marginTop: 50,
    height: 50,
    width: 190,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
