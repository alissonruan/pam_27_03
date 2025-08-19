import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import socket from '@/socket/socket';
import { styles } from '@/styles/index';

export default function Socket(){
    
    //Funcionalidades - UseState
    const roomPrefix = 'chat';

    //Form 1
    const [message, setMessage] = useState('');
    const [recivedMessage, setReceivedMessage] = useState('');

    //Form 2
    const [message2, setMessage2] = useState('');
    const [recivedMessage2, setReceivedMessage2] = useState('');
    //Funcionalidades - UseEffect
    useEffect(()=>{
        socket.emit('join_room', 'chat-1');
        socket.emit('join_room', 'chat-2');

        socket.on('receive_message', (response:{room:string, msg:string})=>{
            console.log(response);

            if(response.room === 'chat-1'){
                setReceivedMessage(response.msg);
            }else if(response.room === 'chat-2'){
                setReceivedMessage2(response.msg);
            }
        });
        return()=>{socket.off('receive_message');};
    }, []);

    //Funcionalidades - Enviar Mensagens
    const sendMessage = (chat:string)=>{
        const targetRoom = `${roomPrefix}-${chat}`;
        const msg = chat === '1' ? message:message2;

        socket.emit('send_message', {
            room:targetRoom, message: msg
        });

        if(chat === '1'){
            setReceivedMessage('');
        } else if(chat === '2'){
            setMessage2('');
        }
    }
    
    return(
        <View style={styles.container}>

            {/* Form 1 */}

            <View>
                <Text style={styles.title}>Canal: Chat 1</Text>
                    <TextInput
                    placeholder="Digite sua Mensagem" value={message}
                    onChangeText={setMessage}
                    style={styles.input}
                    />

                    <TouchableOpacity onPress={()=>sendMessage('1')} style={styles.button}>
                        <Text style={styles.buttonText}>Enviar sua Mensagem</Text>
                    </TouchableOpacity>

                    <Text style={styles.receivedMessageTitle}>Mensagem recebida:</Text>
                    <Text style={styles.receivedMessage}>{recivedMessage || 'nenhuma mensagem recebida' }</Text>
            </View>

            <View style={styles.line}></View>

            {/* Form 2 */}

            <View style={styles.container}>
                <Text style={styles.title}>Canal: Chat 2</Text>
                    <TextInput
                    placeholder="Digite sua Mensagem" value={message2}
                    onChangeText={setMessage2}
                    style={styles.input}
                    />

                    <TouchableOpacity onPress={()=>sendMessage('2')} style={styles.button}>
                        <Text style={styles.buttonText}>Enviar Mensagem</Text>
                    </TouchableOpacity>

                    <Text style={styles.receivedMessageTitle}>Mensagem recebida:</Text>
                    <Text style={styles.receivedMessage}>{recivedMessage2 || 'nenhuma mensagem recebida'}</Text>
            </View>
        </View>
    );
}