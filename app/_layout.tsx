import React from 'react'
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

export default function layout() {
    return (
        <Tabs screenOptions ={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen name='index' options={{title: 'início', tabBarIcon: ({color, size})=> <Ionicons name='home-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='about' options={{title: 'sobre', tabBarIcon: ({color, size})=> <Ionicons name='home-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='settings' options={{title: 'configurações', tabBarIcon: ({color, size})=> <Ionicons name='settings-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='mensages' options={{title: 'mensagens', tabBarIcon: ({color, size})=> <Ionicons name='chatbox-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='profile' options={{title: 'perfil', tabBarIcon: ({color, size})=> <Ionicons name='body-outline' size={size} color={color}/>}}/>
            
        </Tabs>
    );
}
