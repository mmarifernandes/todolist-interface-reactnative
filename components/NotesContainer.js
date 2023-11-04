import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function NotesContainer({ texto, title, data, user, color}) {
  const nota = 
    {
      user: user,
      data: data,
      color: color,
      title: title,
      texto: texto
    }
  const navigation = useNavigation();

  return (
    // <View style={styles.container}>
    <TouchableOpacity style={styles.main(color)} onPress={() => navigation.navigate('Edit', {data: nota})}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{data}</Text>
      </View>
      <Text style={styles.text}>{texto}</Text>
      <Image style={styles.image} source={require('../assets/trashcan.png')}/>      
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: {windowWidth},
  //   height: {windowHeight},
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  main: (color) => ({
    backgroundColor: color ? color : '#F1F0DE',
    width: '93%',
    height: 'fit-content',
    borderRadius: 5,
    padding: 15,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4
    // color: '#F1DEEA'
  }),
  text: {
    color: '#000',
    fontSize: 14
  },
  header: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  date: {
    color: '#595959',
    fontSize: 12
  },
  image:{
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginTop: '5px'
  }

});
