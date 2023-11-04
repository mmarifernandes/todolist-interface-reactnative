import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import NotesContainer from '../components/NotesContainer';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Edit({route, navigation}) {
    const { data } = route.params;
    // const { color } = data.color;
  return (
    <View style={styles.container}>
      <Header title = {'edit'} />
      <View>
        <TouchableOpacity style = {styles.circle(data.color)}>
            <Text></Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.main(data.color)}>
        <Text>{data.title}</Text>
        <Text>{data.texto}</Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4
  }),
  circle: (color) => ({
    height: 25,
    width: 25,
    backgroundColor: color? color: '#000',
    alignSelf: 'flex-start',
    margin: 15,
    borderRadius: 100
  })
});
