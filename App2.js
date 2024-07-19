// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgetPasswordPage from './ForgetPasswordPage';

function HomeScreen( navigation) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title ="ke halaman SignUp" onPress={() => navigation.navigate('SignUp')}></Button>
      <Button title ="ke halaman Login" onPress={() => navigation.navigate('Login')}></Button>
      <Button title ="ke halaman Forget" onPress={() => navigation.navigate('ForgetPassword')}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




















