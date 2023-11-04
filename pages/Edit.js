import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import Header from '../components/Header';

import ColorSwitch from '../components/ColorSwitch';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Edit({route, navigation}) {
    const { data } = route.params;
    const [text, onChangeText] = React.useState(data.texto);
    const [title, onChangeTitle] = React.useState(data.title);
    const [hidden, letHidden] = React.useState(true);

    // const { color } = data.color;
  return (
    <View style={styles.container}>
      <Header title = {'edit'} />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => hidden == true? letHidden(false): letHidden(true) } value={hidden}  style = {styles.circle(data.color)}>
            <Text></Text>
        </TouchableOpacity>
        <ColorSwitch hide={hidden}/>
      </View>
      <View style = {styles.main(data.color)}>
      <TextInput
            style={styles.title}
            onChangeText={onChangeTitle}
            value={title}
            maxLength={25}
      />        
      <ScrollView>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            multiline
      />
      </ScrollView>
      </View>
      {/* <Text>{data.user}</Text> */}

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
    // justifyContent: 'center',
  },
  main: (color) => ({
    backgroundColor: color? color: "#000",
    height: '60%',
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 15,
    // margin: 8,
    shadowColor: '#2D2D2D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2
  }),
  circle: (color) => ({
    height: 25,
    width: 25,
    backgroundColor: color? color: '#000',
    alignSelf: 'flex-start',
    margin: 15,
    // position: 'relative',
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: 'gray',
    shadowColor: '#2D2D2D',
    elevation: 2
    
  }),
  title: {
    fontSize: 24,
    paddingBottom: 10
  },
  input: {
    fontSize: 16,
    color: '#4F4F4F',
    // width: '100%'
    // flex: 1,
    // flexWrap: 'wrap'
  },
  top: {
    display: 'flex',
    justifyContent: 'center'
  }
});
