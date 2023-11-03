import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Home from './pages/home';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
   <Home/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width: {windowWidth},
//     height: {windowHeight},
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
