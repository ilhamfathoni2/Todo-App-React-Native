import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screen/home";
import AddTodo from "./src/screen/add";
import EditTodo from "./src/screen/edit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="Edit" component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
