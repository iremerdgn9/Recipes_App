import { StyleSheet, Text,TextInput, View, SafeAreaView} from "react-native";
import React from "react";
import useFonts from 'expo-font';
//import RecipeListScreen from '../RecipeList/RecipeListScreen';
import { FontAwesome } from "@expo/vector-icons";


const Search = ({icon,placeholder}) => {
    return(
        <View style={{
        backgroundColor: "#fff",
        flexDirection:"row",
        paddingVertical:16,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginVertical:16,
        shadowColor: "#000",
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        }}>
        <FontAwesome name={icon} size={20} color="#f96163" />
            <TextInput style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}>
            {placeholder}
            </TextInput>
        </View>
    );
};

export default Search;
const styles= StyleSheet.create({});