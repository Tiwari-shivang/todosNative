import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/auth/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabConatiner from './screens/tabs';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="TabConatiner" component={TabConatiner} options={{
          headerTitle: 'Tasks',
          headerStyle:{
            backgroundColor: '#75BAFF'
          },
          headerTintColor: '#fff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
