import { useNavigation } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export const Root = () => {
  const navigation = useNavigation();

  const handleToList = () => {
    //@ts-ignore
    navigation.replace('todo');
  };
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'center' }}
      source={require('../assets/gradient.png')}
      resizeMode="cover">
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24 }}>
        <Text variant="headlineLarge">Welcome to TODO</Text>
        <Button
          style={{ width: '80%', marginTop: 32 }}
          onPress={handleToList}
          mode="contained-tonal">
          Go to list
        </Button>
      </View>
    </ImageBackground>
  );
};
