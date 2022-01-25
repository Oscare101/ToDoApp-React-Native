import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function Item(props) {
  const deleteAlert = () =>
    Alert.alert('Delete this goal?', props.title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => props.onDelete(props.id) },
    ])

  return (
    <TouchableOpacity
      onLongPress={() => {
        deleteAlert()
      }}
      onPress={() =>
        props.onEdit(props.id, props.title, props.description, props.color)
      }
    >
      <View style={styles.list}>
        <View
          style={{
            width: 7,
            height: '100%',
            backgroundColor: props.color,
            borderRadius: 100,
            marginRight: 10,
          }}
        ></View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.listText}>{props.title}</Text>
          <Text>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 2,
    minHeight: 40,
    backgroundColor: '#a6e3ff',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 5,
  },
})
