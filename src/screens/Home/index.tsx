import { View, Text, SafeAreaView, TextInput, Touchable, TouchableOpacity, Alert, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Task } from '../../Components/Task';

export const Home = () => {
    const tasks = ['Clean room', 'Take the trash out', 'make bed', 'Take Medicine']
    const handleTaskRemove = () => {
        Alert.alert( 'Remove', `Do you want to delete the task?`)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <Task
                key={item}
                taskName={item}
                onRemove={() => handleTaskRemove(item)}
            />
        )}
        ListEmptyComponent={() => (
            <Text style={styles.emptyText}> Empty List, add your to-do tasks</Text>
        )}
      />
    </View>
  );
}

export default Home