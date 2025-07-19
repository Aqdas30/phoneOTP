import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/Details";
import Dashboard from "./src/Dashboard";
import Login from "./src/Login";



const Stack =createStackNavigator();



export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login"
        component={Login}
        options={{headerShown: false}}
        />

         <Stack.Screen name="Details"
        component={Details}
        options={{headerShown: false}}
        />
         <Stack.Screen name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}