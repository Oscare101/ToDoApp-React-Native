import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

export default function Input(props) {
  const [enteredGoal, setEnteredGoal] = useState('')

  return (
    <Modal visible={props.visible} animationType="">
      <View style={styles.inputView}>
        <TextInput
          placeholder="Add your goal"
          style={styles.input}
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={{ width: '40%' }}>
            <Button
              title="cancel"
              color="red"
              onPress={() => props.onCancel()}
            />
          </View>
          <View style={{ width: '40%' }}>
            <Button
              title="Add"
              onPress={() => {
                props.onAddGoal(enteredGoal)
                setEnteredGoal('')
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    margin: 10,
  },
  buttons: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
