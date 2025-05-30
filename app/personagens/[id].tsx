import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Detail(){
    const {id} = useLocalSearchParams(); //obtem o ID da URL
    return(
        <View>
            <Text>Detalhe: {id}</Text> 
        </View>
    );
}