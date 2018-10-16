import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

let EachListItem = (props) => 
  <View style={styles.container}>
  <View style={styles.post}>
    <Text>{console.log(props)}</Text>
    <Text>Title: {props.title}</Text>
    <Text>id: {props.id}</Text>
    <Text>userid: {props.userid}</Text>
  </View>
  </View>

const styles = StyleSheet.create({
    post: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'yellow',
        marginBottom: 8
    },
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
  });

  export default EachListItem;
