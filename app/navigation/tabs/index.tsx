import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

export default function HomeScreen() {
    const name = "Alisson"
    const router = useRouter();
    const[count, setCount] = useState(0);
    const[nome, setNome] = useState(0);

    useEffect(() => {
        console.log("componente montado!");
    }, [])

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Text>Bem-vindo ao meu App, {name} :D</Text>

            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            
            <Text>Contador: {count}</Text>

            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(- 0)}}/>
            <Text style={styles.textInput}>Menu de Navegação</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        margin: 5
    }
});
