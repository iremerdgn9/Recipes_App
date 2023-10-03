import { StyleSheet,TouchableOpacity, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { categories,recipes, colors} from "../Categories/component";
import { navigation } from '@react-navigation/native';

const Categories = ({navigation}) => {

    return(
        <View>
            <ScrollView horizontal>
                {categories.map((category,item)=> {
                    return(
                        <View key={item}
                        style={{
                        backgroundColor:item==0 ? colors.COLOR_PRIMARY: colors.COLOR_LIGHT,
                        marginRight:10,
                        borderRadius:10,
                        paddingHorizontal:35,
                        paddingVertical:15,
                        shadowColor:"#000",
                        //shadowOpacity: 10,
                        //shadowRadius:10,
                        marginVertical:10,
                        }}>
                          <View>
                           <TouchableOpacity
                              onPress={()=>navigation.navigate("RecipeListScreen")}>

                            <Text style={{fontSize:17,color: item==0 && colors.COLOR_LIGHT}}>{category.category}</Text>
                          </TouchableOpacity>
                       </View>

                       </View>

                    );
                })}

            </ScrollView>
        </View>

    );


};

export default Categories;
const styles = StyleSheet.create({});