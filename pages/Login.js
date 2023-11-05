import React, { Component, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';
import Header from '../components/Header';
import axios from 'axios'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitFormHandler = async (event) => {
        axios.post('https://todolist-rocket-c33v.onrender.com/users/', { 
            
            "name": 'teste',
            "username": username, 
            "password": password
          }).catch(() => { 
            console.log('Error')
          })
      
        // console.log(data)
    };

    return (
        <View style={styles.container}>
            <View style = {{alignItems: 'center'}}>
            <Image style={styles.image} source={require('../assets/icon2.png')}/>      
            </View>
            {/* <Text>username</Text> */}
                <Text style={{fontSize: 24, marginLeft: '8%', marginBottom: '-12%', marginTop: 20}}>Login</Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    onChangeText={setUsername}
                    value={username}
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    maxLength={25}
                />
                <Text>não tem conta? registre-se</Text>

                <TouchableOpacity style={styles.button} onPress={onSubmitFormHandler}>
                    <Text>enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: { windowWidth },
        height: { windowHeight },
        flex: 1,
        backgroundColor: '#F6F6F6',
        // alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: '20%'
    },
    input: {
        backgroundColor: '#F1DEEA',
        borderRadius: 5,
        height: 45,
        width: "85%",
        paddingLeft: 20,
        fontSize: 16,
        marginVertical: 5,
        // borderColor: '#F1DEEA',
        // borderWidth: 2,
        // // overflow: 'hidden',
        // shadowColor: 'black',
        // shadowRadius: 10,
        // shadowOpacity: 1,
        // elevation: 2

    },
    inputs: {
        marginTop: '15%',
        width: "100%",
        alignItems: 'center',
        // marginBottom: '20%'
        // marginVertical: 10
    },
    image:{
        width: 180,
        height: 100
    },
    button:{
        backgroundColor: '#DEE3F1',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 30
    }
});
