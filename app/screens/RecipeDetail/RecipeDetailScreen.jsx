import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity,FlatList, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import Search from "../Search/Search";
//import Favorites from "../Favorites/Favorites";
import Categories from "../Categories/categories";
import { categories,recipes, colors} from "../Categories/component";
//import Recipes from "../Recipe/Recipes";


const RecipeDetailScreen= ({navigation}) => {
    return (

    <View style={{
        backgroundColor:"#6b8e23",
        flex:1}}>
    <Text style={{alignItems:"center",color:"#fffff0", fontSize:80,marginTop:20}}> RECİPES </Text>

        <View
        style={{
        backgroundColor:"#fff",
        flex:1,
        marginHorizontal:10,
        marginTop:100,
        borderTopLeftRadius:56,
        borderTopRightRadius:56,
        }}>
        <FlatList data={recipes} renderItem={({item})=>(
        <View style={{alignItems:"center"}}>

         <TouchableOpacity
            onPress={()=> navigation.navigate("RecipeDetailScreen")}>
        <Image source={item.image}
            style={{width:400,height:250,alignItems:"center",
            resizeMode:"contain",marginTop:30}}/>
        </TouchableOpacity>

            <View style={{
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#fff",
                flex:1,
                marginHorizontal:20,
                marginTop:10,
                borderTopLeftRadius:56,
                borderTopRightRadius:56,
            }}>
            <Text style={{fontSize:30}}>{item.name} </Text>
            <View style={{alignItems:"center",marginHorizontal:1, paddingHorizontal:20,paddingBottom:10,paddingTop:10}}>
            <Text style={{fontSize:17,alignItems:"center"}}>{item.time} </Text>
            <View style={{flex:1,alignItems:"center",marginHorizontal:1, paddingHorizontal:20,paddingBottom:10,paddingTop:10}}>

            <Text style={{fontSize:17,alignItems:"center"}}>{item.difficulty} </Text>
            <Text style={{fontSize:17,alignItems:"center"}}>{item.calories} </Text>
                    {/*    <View style={{paddingHorizontal:1,paddingTop:10}}> */}

            <View style={{
                flex: 1,
                backgroundColor: '#daa520',
                padding: 12,
                width:350,
                height:300,
            }}>
            <Text style={{alignItems:"center",fontSize:20}}> {item.ingredients} </Text>
            </View>
            <Text style={{alignItems:"center",fontSize:30}}>--------------------------</Text>
            <View style={{
                flex: 1,
                backgroundColor: '#daa520',
                padding: 12,
                width:350,
            }}>
            <Text style={{fontSize:20}}>Cooking: {item.cooking} </Text>
            </View>

            </View>
            </View>
        </View>
        </View>
        )}/>



    </View>
    </View>


);
};


export default RecipeDetailScreen;
const styles = StyleSheet.create({});
