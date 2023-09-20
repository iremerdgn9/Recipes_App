import React from "react";
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View,Text,ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from '../RecipeList/RecipeListScreen';
import RecipeDetailScreen from "../RecipeDetail/RecipeDetailScreen";



const Stack = createNativeStackNavigator();

const WelcomeScreen = ({navigation}) => {

    return(
        <View style={{
            flex:1,
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <ImageBackground style={{justifyContent: 'center', resizeMode: 'center', opacity:0.8,
            flex:1,alignItems:'center', width:'100%', height:600,alignItems:'center' }}
            source={require('../../images/welcomeimage.jpg')} />

        <Text style= {{
            fontSize: 150,
            color: '#ff4500',
            fontWeight:'bold',
            borderRadius:2,
            borderWidth:5,
            padding: 4,
            shadowColor:'red',
            borderColor: '#deb887',
        }}>Food App</Text>

        <Text style={{
            justifyContent: "flex-end",
            alignItems:"flex-start",
            fontSize:55,
            borderWidth:4,
            padding:5,
            borderRadius:8,
            borderColor: '#008080',
            fontWeight:"bold",
        }}>Healthy Food Recipes</Text>

        <TouchableOpacity
            onPress={()=> navigation.navigate("RecipeListScreen")}
            style= {{
            backgroundColor: "#800000",
            borderRadius: 10,
            paddingVertical: 14,
            bottom: 10,
            width: '50%',
             alignItems:"center",}}>
            <Text style={{fontSize: 25}}> Let's Start :) </Text>
        </TouchableOpacity>
        </View>
    );
};


export default WelcomeScreen;
const styles = StyleSheet.create({});

