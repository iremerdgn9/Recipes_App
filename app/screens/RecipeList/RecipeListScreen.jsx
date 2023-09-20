import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import Search from "../Search/Search";
//import Favorites from "../Favorites/Favorites";
import Categories from "../Categories/categories";
import { categories,recipes, colors} from "../Categories/component";
import Recipes from "../Recipe/Recipes";
import RecipeDetailScreen from "../RecipeDetail/RecipeDetailScreen";
import RecipeDetailList from "../RecipeList/RecipeDetailList";



const RecipeListScreen= ({navigation}) => {
    return (
    <SafeAreaView style={{marginHorizontal:10}}>

    <View classname="flex-1 bg-white">
        <StatusBar style="dark" />
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50}}>
        <View style={{flex:1,flexDirection:"row", justifyContent:"space-between"}}>
            <Image source={require('../../images/1200x630wa.png')}
            style={{
                borderBottomRightRadius:90,
                borderBottomLeftRadius:90,
                borderTopRightRadius:90,
                borderTopLeftRadius:90,
                width:hp(15),height:hp(15)}} />
        <View style={{marginHorizontal:20, paddingTop:50}}>
            <TouchableOpacity
                onPress={()=> navigation.navigate("Favorites")}>
                <FontAwesome name="heart" size={40} color="red" />
            </TouchableOpacity>
        </View>
        </View>
            <View style={{flex:1,flexDirection:"row", justifyContent:"space-between"}}>
                         <Text style={{fontSize:hp(3), left:10}}>Hi, İrem!</Text>
            </View>

            <Text style={{fontSize:50, fontWeight:'bold'}}>Make your own <Text style={{color:'gold'}}>delicious</Text> food,</Text>

        { /* search bar */ }
        <Search icon="search" placeholder={"enter your fav recipe"} />

      {/*  Categories filter */ }
        <View style={{marginTop:10}}>
             <Text style={{fontSize:22, fontWeight:"bold", textDecorationStyle:'solid'}}>Categories</Text>
        { /* Categories list */ }
        <Categories />
        </View>

      {/* recipe list filter */}
          <View style={{marginTop:10}}>
             <TouchableOpacity
                onPress={()=> navigation.navigate("RecipeDetailList")}>
                <Text style={{fontSize:22, fontWeight:"bold",textDecorationStyle:'solid'}}>Recipes</Text>
             </TouchableOpacity>

      { /* recipes list */ }
      <Recipes />

          </View>


        </ScrollView>
    </View>
    </SafeAreaView>

);
};

export default RecipeListScreen;
const styles = StyleSheet.create({});

