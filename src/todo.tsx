import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE } from 'firebaseConfig';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';

export const Todo = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<any[]>([]);

  useEffect(() => {
    const todoRef = collection(FIRESTORE, 'todos');

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        console.log('UPDATE');

        const todos: any[] = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTodoList(todos);
      },
    });

    return () => subscriber();
  }, []);

  const addTodo = async () => {
    const doc = await addDoc(collection(FIRESTORE, 'todos'), {
      title: todo,
      done: false,
    });
    setTodo('');
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 70 }}>
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
        style={{
          width: '100%',
          marginTop: 16,
          paddingVertical: 4,
          marginBottom: 16,
        }}
        onPress={addTodo}>
        ADD TODO
      </Button>

      <Divider style={{ marginBottom: 16 }} />

      {todoList.map((todo) => (
        <View
          id={todo.id}
          style={{
            flexDirection: 'row',
            paddingVertical: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            {todo.done && (
              <MaterialIcons
                name="check-circle-outline"
                size={24}
                color="black"
              />
            )}
            {!todo.done && (
              <MaterialIcons
                name="radio-button-unchecked"
                size={24}
                color="black"
              />
            )}
            <Text style={{ marginLeft: 16 }} variant="bodyMedium">
              {todo.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Octicons name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ))}

      {/* <Button
        onPress={
          //@ts-ignore
          () => navigation.navigate('detail')
        }>
        Go Detail
      </Button> */}
    </View>
  );
};
