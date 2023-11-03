import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function NotesContainer({texto, title, data, user, color}) {
  console.log(color)
  return (
    // <View style={styles.container}>
      <View style = {styles.main(color)}>
        <View style = {styles.header}>
          <Text style= {styles.title}>{title}</Text>
          <Text style= {styles.date}>{data}</Text>
        </View>
          <Text style= {styles.text}>{texto}</Text>
      </View>
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
    backgroundColor: color? color : '#F1F0DE',
    width: '90%',
    height: 'fit-content',
    borderRadius: '5px',
    padding: '15px',
    margin: '8px',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // color: '#F1DEEA'
  }),
  text: {
    color: '#000',
    fontSize: '16px'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500'
  },
  date:{
    color: '#595959'
  }

});
