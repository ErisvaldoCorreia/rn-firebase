import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export const Todo = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TODO LIST</Text>

      <Button
        title="Detail"
        onPress={
          //@ts-ignore
          () => navigation.navigate('detail')
        }
      />
    </View>
  );
};
