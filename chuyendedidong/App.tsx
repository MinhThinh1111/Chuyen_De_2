import React from "react";
import FlightScreen from "./Screens/FlightScreen";
import FindPlaneScreen from "./Screens/FindPlaneScreen";
import DetailFlightScreen from "./Screens/DetailFlightScreen";
import InformationScreen from "./Screens/InformationScreen";
import ConfirmInformationScreen from "./Screens/ConfirmInformationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from "./Screens/Test";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={FlightScreen} />
        <Stack.Screen name="Find" options={{ headerShown: false }} component={FindPlaneScreen} />
        <Stack.Screen name="Detail" options={{ headerShown: false }} component={DetailFlightScreen} />
        <Stack.Screen name="Information" options={{ headerShown: false }} component={InformationScreen} />
        <Stack.Screen name="Confirm" options={{ headerShown: false }} component={ConfirmInformationScreen} />
        <Stack.Screen name="Test" options={{ headerShown: false }} component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;