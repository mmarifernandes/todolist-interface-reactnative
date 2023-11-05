import React, { Component, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';
import Header from '../components/Header';
import axios from 'axios'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Register() {

//   const [data, setData] = React.useState([]);


//   useEffect(() =>{
//     axios.get('https://todolist-rocket-c33v.onrender.com/tasks/').then(response => { 
//         setData({ data: response.data })
//       }).catch(() => { 
//         console.log('Error retrieving data')
//       })
//     })
//     console.log(data)
  
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: { windowWidth },
    height: { windowHeight },
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  notes: {
    // marginTop: '10vh',
    alignItems: 'center',
    margin: 0,
    marginVertical: 10

  },
  scroll: {
    // marginVertical: 10
  }
});
