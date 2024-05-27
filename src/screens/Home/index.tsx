import { View, Text, SafeAreaView, TextInput, Touchable, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Task } from '../../Components/Task';

export const Home = () => {
    const [tasks , setTasks] = useState([])
    const [task , setTask] = useState('')

    const handleTaskRemove = (taskName: string) => {
        Alert.alert( 'Remove', `Do you want to delete the task?`, [
          {
            text: 'Yes',
            onPress: () => setTasks( prevState => prevState.filter(task => task != taskName))
          },
          {
            text: 'No',
            style: 'cancel'
          }
        ]) 
    }

    const handleTaskAdd = () => {
      if(task === ''){
        return Alert.alert('Empty Input', 'Fill in the field and press the button to add a task')
      }
      if (tasks.includes(task)) {
        return Alert.alert('Task Already Exists')
      }
      setTasks([...tasks, task])
      setTask('')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>To-do List</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          placeholderTextColor="#808080"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleTaskAdd}
        >
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