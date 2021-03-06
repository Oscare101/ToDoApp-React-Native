import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, FlatList } from 'react-native'

import Input from './components/input'
import Item from './components/item'
import Edit from './components/edit'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [titleEdit, setTitleEdit] = useState('')
  const [colorEdit, setColorEdit] = useState('')
  const [descriptionEdit, setDescriptionEdit] = useState('')
  const [idEdit, setIdEdit] = useState('')
  function Handler(goalTitle, description, goalColor) {
    if (goalTitle.trim().length === 0) {
      return // you can't add empty goal or a goal only with spaces
    }
    setGoals((current) => [
      ...current,
      {
        id: Math.random().toString(),
        value: goalTitle,
        description: description,
        color: goalColor,
      },
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

  function EditGoal(id, title, description, color) {
    //console.log(id, title, description, color)
    //console.log(goals)
    //let index = goals.findIndex((obj) => obj.id == id)
    //console.log(goals[index].value)
    setTitleEdit(title)
    setDescriptionEdit(description)
    setColorEdit(color)
    setIdEdit(id)
    setIsEditMode(true)
  }

  function EditGoalList(enteredGoal, description, goalColor, id) {
    let index = goals.findIndex((obj) => obj.id == id)
    goals[index].value = enteredGoal
    goals[index].description = description
    goals[index].color = goalColor

    setIsEditMode(false)
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
      <Edit
        visible={isEditMode}
        title={titleEdit}
        description={descriptionEdit}
        color={colorEdit}
        id={idEdit}
        onEditModal={() => setIsEditMode(false)}
        afterEdit={EditGoalList}
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
            description={itemData.item.description}
            color={itemData.item.color}
            onEdit={EditGoal}
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
