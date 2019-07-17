import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import ComponentInput from './src/components/AddItem/ComponentInput';
import ListContainer from './src/components/ListContainer/ListContainer';

export default class App extends React.Component {

  state = {
    arrays:[] 
  }

  onPressAdd = (value) => {

    if(value === ""){
      alert('Input is empty')
      return
    }

    this.setState(prevState => {
      return {
        arrays: prevState.arrays.concat(value)
      };
    });
    
  }
 

  render() {

    return (
      <View style={styles.container}>

        <ComponentInput 
        style = {styles.inputContainer}  
        onPressAdd = {this.onPressAdd}/>

        <ListContainer 
        arrays = {this.state.arrays}/>

 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
});
