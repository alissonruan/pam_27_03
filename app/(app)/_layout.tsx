import {Slot, Redirect} from "expo-router"
//import {useAuth} from "@/services/auth/euseAuth";
import { ActivityIndicator, View} from "react-native"

export default function AppLayout(){
    //const {user, loading} = useAuth();

    if(){
        return(
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <ActivityIndicator/>
            </View>
        );
    }

    if(){
       return<Redirect href="/(auth)/login"/> 
    }

    return <Slot/>;
}
