import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, IconButton } from 'native-base';

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import { CartButton } from './components';
import Filter from './screens/Product/Filter';
import { CartList } from './screens/Cart';

import { ProductDetails, ProductList } from '~/screens/Product';
import { LoginScreen, RegisterScreen } from '~/screens/Auth';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen
      name="ProductDetails"
      options={{
        presentation: 'modal',
      }}
      component={ProductDetails}
    />
    <Stack.Screen
      name="ProductFilter"
      options={{
        presentation: 'fullScreenModal',
        animation: 'slide_from_right',
      }}
      component={Filter}
    />

    <Stack.Screen
      name="CartList"
      options={{
        presentation: 'modal',
        animation: 'slide_from_right',
      }}
      component={CartList}
    />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();
const Sidebar = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      key="_ListProducts"
      name="Início"
      component={RootNavigator}
      options={({ navigation }) => ({
        headerRight: () => (
          <CartButton onPress={() => navigation.navigate('CartList')} />
        ),
      })}
    />
  </Drawer.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      {false ? <AuthNavigator /> : <Sidebar />}
    </NavigationContainer>
  );
}
