import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, IconButton } from 'native-base';
import { useSelector } from 'react-redux';

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';

import { OrderList, OrderDetails } from '~/screens/Order';
import { CartList } from '~/screens/Cart';
import { CartButton, DrawerContent } from '~/components';
import { ProductDetails, ProductFilter, ProductList } from '~/screens/Product';
import { LoginScreen, RegisterScreen } from '~/screens/Auth';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
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
      component={ProductFilter}
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

const OrderNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="OrderList" component={OrderList} />
    <Stack.Screen
      key="OrderDetail"
      name="OrderDetail"
      component={OrderDetails}
    />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();
const Sidebar = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerLabelStyle: {
        fontSize: 15,
      },
    }}
    drawerContent={props => <DrawerContent {...props} />}
  >
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

    <Drawer.Screen key="_Pedidos" name="Pedidos" component={OrderNavigator} />
  </Drawer.Navigator>
);

export default function Navigation() {
  const userToken = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      {!userToken ? <AuthNavigator /> : <Sidebar />}
    </NavigationContainer>
  );
}
