import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Registration from "../pages/registration";
import { ScreenNames } from "../utils/screenNames";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import MyCartList from "../pages/myCartList";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenNames.login} component={Login} />
        <Stack.Screen name={ScreenNames.registration} component={Registration} />
        <Stack.Screen name={ScreenNames.home} component={Home} />
        <Stack.Screen name={ScreenNames.productDetails} component={ProductDetails} />
        <Stack.Screen name={ScreenNames.myCartList} component={MyCartList} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
