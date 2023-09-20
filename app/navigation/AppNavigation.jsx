import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Home/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeList/RecipeListScreen";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import RecipeDetailScreen from "../screens/RecipeDetail/RecipeDetailScreen";
import RecipeDetailList from "../screens/RecipeList/RecipeDetailList";



const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions = {{headerShown: false }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
                <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
                <Stack.Screen name="RecipeDetailList" component={RecipeDetailList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
const styles = StyleSheet.create({});