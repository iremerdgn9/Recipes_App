import { StyleSheet,ScrollView,Pressable, Text, View,Image,FlatList,TouchableOpacity } from "react-native";
import React from "react";
//import RecipeListScreen from '../RecipeList/RecipeListScreen';
import { categories,recipes, colors} from "../Categories/component";
//import Favorites from "../Favorites/Favorites";
import { FontAwesome} from "@expo/vector-icons";
import RecipeDetailScreen from "../RecipeDetail/RecipeDetailScreen";
import { useNavigation } from '@react-navigation/native';


const Recipes = () => {
const navigation = useNavigation();
    return(
            <FlatList data={recipes} renderItem={({item})=>(
                <Pressable
                    onPress={()=> navigation.navigate("RecipeDetailScreen")}
             style={{
            backgroundColor: '#eee8aa',
            shadowColor: "#000",
            shadowOffset: {width:0,height:4},
            shadowOpacity:0.1,
            shadowRadius:25,
            borderRadius:20,
            marginVertical:30,
            paddingHorizontal:10,
            alignItems:"center",
         //  flex:1,flexDirection:"row", justifyContent:"space-between",
            }}>
            <Image source={item.image}
            style={{width:160,height:170,resizeMode:"center"}}/>
                <Text style={{fontSize:20}}>{item.name}</Text>
                <View style={{flex:1,marginHorizontal:10, paddingHorizontal:20,paddingBottom:10,paddingTop:10,flexDirection:"row"}}>
                    <Text style={{fontSize:15}}>{item.time} </Text>
                    <Text>       </Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Favorites")}>
                        <FontAwesome name="heart" size={30} color="red" />
                    </TouchableOpacity>
                </View>

            </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={{justifyContent:"space-between"}}
           />

);
};
export default Recipes;
const styles = StyleSheet.create({});