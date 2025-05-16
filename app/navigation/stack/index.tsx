import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function OptionsScreen(){
    const router = useRouter()
    return(


        <View>
            Estou na página Options

            <Button title='Ir para Detalhes' onPress={()=>router.push('/navigation/stack/details')}/>
        </View>
    )
}