import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity,FlatList,Pressable, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
import Categories from "../Categories/categories";
import { categories,recipes, colors} from "../Categories/component";
import Recipes from "../Recipe/Recipes";


const RecipeDetailList= ({navigation}) => {

    return (
    <View style={{alignItems:"center",
        backgroundColor:"#6b8e23",flex:1}}>
    <SafeAreaView style={{flexDirection:"row" ,marginHorizontal:30 }}>
        <Pressable style={{flex:1}} onPress={()=>navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"}
                size={35} color="orange" marginTop={40}/>
        </Pressable>
            <FontAwesome name={"heart-o"} size={30} color="white" marginTop={40}/>
    </SafeAreaView>

    <Text style={{alignItems:"center",color:"#fffff0", fontSize:60,marginTop:20}}> RECİPES</Text>

        <View
        style={{
            backgroundColor:"#fff",
            flex:1,
            marginTop:50,
            borderTopLeftRadius:56,
            borderTopRightRadius:56,
        }}>
        <FlatList data={recipes} renderItem={({item})=>(
        <View style={{alignItems:"center"}}>

         <TouchableOpacity
            onPress={()=> navigation.navigate("RecipeDetailScreen",{item:item})}>
        <Image source={item.image}
            style={{width:450,height:260,resizeMode:"contain", borderTopLeftRadius:56,
                borderTopRightRadius:56}}/>
        </TouchableOpacity>

            <View style={{
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#fff",
                flex:1,
                marginTop:15,
                borderTopLeftRadius:56,
                borderTopRightRadius:56,
            }}>
                <Text style={{fontSize:30}}>{item.name} </Text>
            <View style={{flex:1,flexDecoration:"row",marginHorizontal:1, paddingHorizontal:20,paddingBottom:10,paddingTop:10}}>
                <Text style={{fontSize:17}}>{item.time} </Text>
                <Text style={{fontSize:17}}>{item.difficulty} </Text>
                <Text style={{fontSize:17}}>{item.calories} </Text>
                    {/*    <View style={{paddingHorizontal:1,paddingTop:10}}> */}

        {/*   <Text style={{alignItems:"center",fontSize:20}}> {item.ingredients} </Text>
            <Text style={{alignItems:"center",fontSize:30}}>--------------------------</Text>
            <Text style={{fontSize:20}}>Cooking: {item.cooking} </Text> */}

            </View>

            </View>
        </View>
        )}/>

    </View>
    </View>
);
};

export default RecipeDetailList;
const styles = StyleSheet.create({});
