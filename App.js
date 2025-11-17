import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Login from "./app/screens/Login";
import BottomTab from "./app/components/BottomTab";
import InitialSetting from "./app/screens/InitialSetting";


const Stack = createNativeStackNavigator();



export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen
                        name="Main"
                        component={BottomTab}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="InitialSetting"
                        component={InitialSetting}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}