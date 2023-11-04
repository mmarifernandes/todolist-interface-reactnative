import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ColorSwitch = (props) => {
    const { hide } = props;
    if (hide) {
      return null;
    }
    return (
      <View style={styles.circles}>
        <TouchableOpacity style = {styles.circle('#F1DEEA')}>
            <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.circle('#DEE3F1')}>
            <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.circle('#F1F0DE')}>
            <Text></Text>
        </TouchableOpacity>
      </View>
    );
  };
export default ColorSwitch;

const styles = StyleSheet.create({
    circle: (color) => ({
        height: 25,
        width: 25,
        backgroundColor: color? color: '#000',
        // alignSelf: 'flex-start',
        // marginLeft: 50,
        marginHorizontal: 5,
        marginTop: -40,
        borderRadius: 100,
        shadowColor: '#2D2D2D',
        elevation: 1
        
        // position: 'relative'
      }),
      circles:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 45,

      }
});
