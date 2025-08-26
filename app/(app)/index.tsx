import {Text, View, Button, StyleSheet} from "react-native";
/*import {useAuth} from "@/services/auth/useAuth"*/

export default function Home(){
    /*const {user, singOut} useAuth()*/
    return(
        <View style={styles.container}>
            <Text>Olá...</Text>
            <Button title="sair" onPress={}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        gap: 16

    }
});