import React, { Component, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';
import Header from '../components/Header';
import axios from 'axios'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const notas = [
  {
    user: 'marina',
    data: '03/11/2023',
    color: '#F1DEEA',
    title: 'my title',
    texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
  },
  {
    user: 'marina',
    data: '04/11/2023',
    color: '#F1F0DE',
    title: 'my title2',
    texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
  },
  {
    user: 'marina',
    data: '05/11/2023',
    color: '#DEE3F1',
    title: 'my title3',
    texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
  },
  {
    user: 'marina',
    data: '05/11/2023',
    color: '#F1F0DE',
    title: 'my title4',
    texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
  }
];

export default function Home() {

  const [data, setData] = React.useState([]);


  useEffect(() =>{
    axios.get('https://todolist-rocket-c33v.onrender.com/tasks/').then(response => { 
        setData({ data: response.data })
      }).catch(() => { 
        console.log('Error retrieving data')
      })
    })
    console.log(data)
  
  return (
    <View style={styles.container}>
      <Header title = {'home'}/>
      <ScrollView style = {styles.scroll}>
      <View style={styles.notes}>
        {notas.map((nota) => (
          <NotesContainer color={nota.color} texto={nota.texto} title={nota.title} user={nota.user} data={nota.data} />
        ))}
      </View>
      </ScrollView>
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
