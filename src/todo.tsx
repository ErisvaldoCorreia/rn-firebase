import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE } from 'firebaseConfig';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export const Todo = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState('');

  const addTodo = async () => {
    const doc = await addDoc(collection(FIRESTORE, 'todos'), {
      title: todo,
      done: false,
    });
    setTodo('');
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ paddingBottom: 24 }} variant="titleLarge">
        TODO LIST
      </Text>

      <TextInput
        placeholder="Input a new todo"
        mode="outlined"
        onChangeText={(text: string) => setTodo(text)}
        value={todo}
      />

      <Button
        disabled={todo === ''}
        mode="contained-tonal"
        style={{ width: '100%', marginTop: 16, paddingVertical: 4 }}
        onPress={addTodo}>
        ADD TODO
      </Button>

      <Button
        onPress={
          //@ts-ignore
          () => navigation.navigate('detail')
        }>
        Go Detail
      </Button>
    </View>
  );
};
