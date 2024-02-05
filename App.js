import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openAddGoalHandler() {
    setModalIsOpen(true);
  }

  function closeAddGoalHandler() {
    setModalIsOpen(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsOpen(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => currentGoals.filter((i) => i.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#8946e0"
          onPress={openAddGoalHandler}
        />
        <GoalInput
          onGoalAdd={addGoalHandler}
          showModal={modalIsOpen}
          onCloseModal={closeAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
