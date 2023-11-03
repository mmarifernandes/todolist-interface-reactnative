import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const notas = [{user: 'marina', data:'03/11/2023', color: '#F1DEEA', title: 'my title', texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'}, {user: 'marina', data:'04/11/2023', color: '#F1F0DE', title: 'my title2', texto: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'}];

export default function Header() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#E8E8E8',
    shadowColor: "#000",
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 5

    // height: {windowHeight},
    // flex: 1,
    // backgroundColor: '#F6F6F6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    marginLeft: '10%',
    marginTop: 30,
    // position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
