import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, FlatList } from 'react-native'

import Input from './components/input'
import Item from './components/item'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  function Handler(goalTitle, goalColor) {
    if (goalTitle.trim().length === 0) {
      return // you can't add empty goal or a goal only with spaces
    }
    setGoals((current) => [
      ...current,
      { id: Math.random().toString(), value: goalTitle, color: goalColor },
    ])

    setIsAddMode(false)
  }
  function removeGoal(goalId) {
    setGoals((current) => {
      return current.filter((goal) => goal.id !== goalId)
    })
  }

  function cancelGoalAddition() {
    setIsAddMode(false) // goal input window
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Your ToDo App</Text>
      <Button
        title="Add new Goal"
        onPress={() => {
          setIsAddMode(true)
        }}
      />
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
            color={itemData.item.color}
          />
        )}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    padding: 50,
    backgroundColor: '#d9f1fc',
    flex: 1,
  },
  header: {
    color: '#888',
    letterSpacing: 2,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
