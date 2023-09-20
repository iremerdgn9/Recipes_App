import { StyleSheet,TouchableOpacity, Text,TextInput, View,SafeAreaView,Image, ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { categories,recipes, colors} from "../Categories/component";

const Categories = () => {
    return(
        <View>
            <ScrollView horizontal>
                {categories.map((category,index)=> {
                    return(
                        <View key={index}
                        style={{
                        backgroundColor:index==0 ? colors.COLOR_PRIMARY: colors.COLOR_LIGHT,
                        marginRight:10,
                        borderRadius:10,
                        paddingHorizontal:35,
                        paddingVertical:15,
                        shadowColor:"#000",
                        //shadowOpacity: 10,
                        //shadowRadius:10,
                        marginVertical:10,
                        }}>
                            <Text style={{fontSize:17,color: index==0 && colors.COLOR_LIGHT}}>{category.category}</Text>
                        </View>
                    );
                })}

            </ScrollView>
        </View>
    );

};

export default Categories;
const styles = StyleSheet.create({});