import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const listItem = (props) => {

    return(
            <TouchableHighlight onPress = {() => {props.itemPressed(props.value)}}>
                <View>
                    <Text style={style.listItem}> { props.value} </Text>
                </View>
            </TouchableHighlight>
        );
};

const style = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eeef0f"
    }
});
export default listItem;