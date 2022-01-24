import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import Input from './components/input'
import Item from './components/item'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  function Handler(goalTitle) {
    setGoals((current) => [
      ...current,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setIsAddMode(false)
  }
  function removeGoal(goalId) {
    setGoals((current) => {
      return current.filter((goal) => goal.id !== goalId)
    })
  }

  function cancelGoalAddition() {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <Input
        visible={isAddMode}
        onAddGoal={Handler}
        onCancel={cancelGoalAddition}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <Item
            id={itemData.item.id}
            onDelete={removeGoal}
            title={itemData.item.value}
          />
        )}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
})
