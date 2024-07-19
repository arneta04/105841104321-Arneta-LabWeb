import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/gambar/home-aktif.png';
import HomeInaktif from './assets/gambar/home.png';
import Shop from './assets/gambar/shop-aktif.png'
import ShopInaktif from './assets/gambar/shop-non-aktif.png'
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;