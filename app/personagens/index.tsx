import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function List(){
    const router = useRouter(); //sempre terminar com parenteses ()
    let id = '1';
    return(
        <View>
            <Text>Página de Lista</Text> 
            <Button title="1 - detalhe" onPress={() => router.push(`/personagens/${id}`)}/>
        </View>
    );
}