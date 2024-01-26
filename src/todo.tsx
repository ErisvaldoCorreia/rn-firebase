import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE } from 'firebaseConfig';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export const Todo = () => {
  const navigation = useNavigation();

  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE, 'todos'), {
      title: 'novo teste de todo',
      done: false,
    });
    console.log(doc);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="titleLarge">TODO LIST</Text>

      <Button onPress={() => addTodo()}>ADD TODO</Button>

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
