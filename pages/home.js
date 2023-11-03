import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const notas = [
  { user: 'marina', 
  data: '03/11/2023', 
  color: '#F1DEEA', 
  title: 'my title', 
  texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet' }, 
  { user: 'marina', 
  data: '04/11/2023', 
  color: '#F1F0DE', 
  title: 'my title2', 
  texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet' },
  { user: 'marina', 
  data: '05/11/2023', 
  color: '#DEE3F1', 
  title: 'my title3', 
  texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet' }
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.notes}>
      {notas.map((nota) => (
        <NotesContainer color= {nota.color} texto = {nota.texto} title = {nota.title} user = {nota.user} data = {nota.data}/>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: {windowWidth},
    height: {windowHeight},
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  notes:{
    // marginTop: '10vh',
    alignItems: 'center',
    

  }
});
