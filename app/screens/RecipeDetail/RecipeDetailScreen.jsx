import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity,FlatList,Pressable, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome} from "@expo/vector-icons";
import {FontAwesomeIcon} from "@expo/vector-icons";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
import Categories from "../Categories/categories";
import { categories,recipes, colors} from "../Categories/component";



const RecipeDetailScreen= ({navigation, route}) => {
const {item} = route.params;
console.log(item);



    return (
    <View style={{alignItems:"center",backgroundColor:item.color,flex:1}}>
        <SafeAreaView style={{flexDirection:"row" ,marginHorizontal:30 }}>
        <Pressable style={{flex:1}} onPress={()=>navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"}
             size={35} color="orange" marginTop={40}/>
        </Pressable>
            <FontAwesome name={"heart-o"} size={30} color="white" marginTop={40}/>
        </SafeAreaView>



    <Text style={{alignItems:"center",color:"#fffff0", fontSize:60,marginTop:20}}> RECİPES</Text>
    <View style={{ flex: 1 }}>
	    <ScrollView showsVerticalScrollIndicator={false}
	    contentContainerStyle={{paddingBottom:50}}>

        <View
        style={{
            alignItems:"center",
            backgroundColor:"#fff",
            flex:1,
            marginTop:50,
            borderTopLeftRadius:56,
            borderTopRightRadius:56,
        }}>
            <View style={{alignItems:"center"}}>
                <Image source={item.image}
                    style={{width:450,height:260,resizeMode:"contain",
                    borderTopLeftRadius:56,
                    borderTopRightRadius:56,}}/>
            </View>

            <View style={{
                alignItems:"center",
                backgroundColor:"#fff",
                flex:1,
                borderTopLeftRadius:56,
                borderTopRightRadius:56,
            }}>
            <Text style={{fontSize:30}}>{item.name} </Text>
            <View style={{alignItems:"center",marginHorizontal:1, paddingHorizontal:20,paddingBottom:10,paddingTop:10}}>
            <Text style={{fontSize:17,alignItems:"center"}}>{item.time} </Text>
            <View style={{flex:1,alignItems:"center",marginHorizontal:1, paddingHorizontal:20,paddingBottom:1,paddingTop:1}}>

            <Text style={{fontSize:17,alignItems:"center"}}>{item.difficulty} </Text>
            <Text style={{fontSize:17,alignItems:"center"}}>{item.calories} </Text>
                    {/*    <View style={{paddingHorizontal:1,paddingTop:10}}> */}
    </View>
    </View>
    </View>

            {item.ingredients.map((ingredients,index)=> {
            return(
            <View style={{
                 flexDirection: "row",
                 backgroundColor: '#daa520',
                 alignItems:"center",
                 padding:2,
                 width:370,
                 }}
                 key={index}
                 >

                <View style={{
                    flex: 1,
                    backgroundColor: '#daa520',
                    padding:5,
                    width:370,
                }}>
                <Text style={{marginLeft:1,alignItems:"center",fontSize:20}}> {ingredients} </Text>
                </View>
            </View>
                      );
                      })}

            <Text style={{alignItems:"center",fontSize:30}}>----------------------------</Text>

            {item.cooking.map((cooking,index)=> {
            return(
            <View style={{
                flexDirection: "row",
                backgroundColor: '#daa520',
                alignItems:"center",
                marginVertical:4,
                padding:10,
                width:370,
            }}
                key={index}
            >

             <View style={{
                 flex: 1,
                 backgroundColor: '#daa520',
                 width:370,
             }}>
             </View>
                 <Text style={{alignItems:"center",fontSize:20}}> {cooking} </Text>
</View>

             );
             })}

              </View>
            </ScrollView>

            </View>
            </View>

);
};


export default RecipeDetailScreen;
const styles = StyleSheet.create({});
