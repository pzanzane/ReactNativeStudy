import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {

  state = {
    text: '',
    arrays:[] 
  }

  printHandler = (event) => {
    this.setState({text: event})
  }

  onPressAdd = () => {

    if(this.state.text != ''){

      this.setState(prevState => {
          return {
            arrays: prevState.arrays.concat(prevState.text)
          };
      });
    }else{
      alert('No data')
    }
    
  }
 

  render() {

    const arraysOutput = this.state.arrays.map( (text, i) => (
      <ListItem key = {i} value = {text}/>
    ))
    return (
      <View style={styles.container}>

        <View style = {styles.inputContainer}>

        <TextInput style={styles.styleInput}
                  onChangeText = {this.printHandler}
                  value = {this.state.text}/>

          <Button 
            style = {styles.styleButton}
            title = "Add"
            onPress = {this.onPressAdd}
          />

        </View>

        <View style={styles.listContainer}>
          {arraysOutput}
        </View>

 
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
  },
  styleInput: {
    width: '70%',
    borderColor: 'gray', 
    borderWidth: 1
  },
  styleButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
    marginTop: 10,
    padding: 5
  }  
});
