import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';

const listContainer = (props) => {

    itemPressed = (value) => {
        alert(value)
    }

    const arraysOutput = props.arrays.map( (text, i) => (
        <ListItem key = {i} 
        value = {text}
        itemPressed = {this.itemPressed}/>
      ))
 
    return (
        <View style = {styles.listContainer}> 
            {arraysOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        marginTop: 10,
        padding: 5
      } 
})
export default listContainer;