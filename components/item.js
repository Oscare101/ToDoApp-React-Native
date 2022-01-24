import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Item(props) {
  return (
    <TouchableOpacity
      onLongPress={() => {
        props.onDelete(props.id)
      }}
    >
      <View style={styles.list}>
        <Text style={styles.listText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
  },
  listText: {},
})
