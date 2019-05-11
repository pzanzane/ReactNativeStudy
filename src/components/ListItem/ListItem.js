import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const listItem = (props) => (
<View>
    <Text style={style.listItem}> { props.value} </Text>
</View>
);

const style = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eeef0f"
    }
});
export default listItem;