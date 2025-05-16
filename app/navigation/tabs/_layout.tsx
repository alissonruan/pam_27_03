import React from 'react'
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

export default function layout() {
    return (
        <Tabs screenOptions ={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen name='init' options={{title: 'Início', tabBarIcon: ({color, size})=> <Ionicons name='home-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='about' options={{title: 'Sobre', tabBarIcon: ({color, size})=> <Ionicons name='bulb-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='settings' options={{title: 'Configurações', tabBarIcon: ({color, size})=> <Ionicons name='settings-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='mensages' options={{title: 'Mensagens', tabBarIcon: ({color, size})=> <Ionicons name='chatbox-outline' size={size} color={color}/>}}/>

            <Tabs.Screen name='profile' options={{title: 'Perfil', tabBarIcon: ({color, size})=> <Ionicons name='body-outline' size={size} color={color}/>}}/>
            
        </Tabs>
    );
}
