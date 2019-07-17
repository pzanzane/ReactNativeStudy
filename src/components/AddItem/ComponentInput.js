import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class ComponentInput extends Component {

    state = {
        text:''
    }
    printHandler = (event) => {
        this.setState({text: event})
    }

    render() {

        return(
            <View style = {this.props.style}>
                <TextInput style={style.input} 
                value = {this.state.text}
                onChangeText = {this.printHandler}/>
                <Button style={style.button} title = 'Add' onPress = {() => {this.props.onPressAdd(this.state.text)}}/>
            </View>
        );

    }
}

const style = StyleSheet.create({
    input: {
        width: '70%',
        borderColor: 'grey',
        borderWidth: 1
    },
    button: {
        width: '30%'
    }
});
export default ComponentInput;