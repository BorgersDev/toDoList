import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'

type Props = {
  taskName: string;
  onRemove: () => void;
}

export const Task = ({taskName, onRemove}: Props) => {
  return (
    <View style={styles.container} >
        <Text style={styles.text}>{taskName}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Task