import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native'

export default function Input(props) {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goalColor, setGoalColor] = useState('#00000000')
  const [colorModal, setColorModal] = useState(false)

  return (
    <Modal visible={props.visible} animationType="slide">
      <Modal visible={colorModal} transparent={true} animationType="slide">
        <View
          style={{
            marginTop: '50%',
            backgroundColor: '#fff',
            borderRadius: 20,
            shadowColor: '#444', /////////////
            height: '30%',
            width: '60%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#ff0000')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#FF0000',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#ffea00')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#ffea00',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#04ff00')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#04ff00',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#00d5ff')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#00d5ff',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#041dd6')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#041dd6',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGoalColor('#ff00b3')
                  setColorModal(false)
                }}
              >
                <View
                  style={[
                    styles.colorPicker,
                    {
                      backgroundColor: '#ff00b3',
                    },
                  ]}
                ></View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setGoalColor('#00000000')
              setColorModal(false)
            }}
          >
            <View
              style={{
                backgroundColor: '#999',
                justifyContent: 'center',
                alignItems: 'center',
                width: 140,
                height: 40,
                margin: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 24 }}>No color</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.inputView}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: 7,
              height: 36,
              backgroundColor: goalColor,
              borderRadius: 100,
            }}
          ></View>
          <TextInput
            placeholder="Add your goal"
            style={styles.input}
            onChangeText={(text) => setEnteredGoal(text)}
            value={enteredGoal}
          />
        </View>

        <View style={{ marginBottom: 10, width: '80%' }}>
          <Button
            title="color"
            color="#0dd155"
            onPress={() => setColorModal(true)}
          />
        </View>

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
                props.onAddGoal(enteredGoal, goalColor)
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
    backgroundColor: '#d9f1fc',
  },
  input: {
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    margin: 10,
    marginLeft: 0,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorPicker: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 10,
  },
})
