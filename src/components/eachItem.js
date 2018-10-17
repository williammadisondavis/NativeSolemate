import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

let EachListItem = (props) => 

  <View style={styles.container}> 
  <View style={styles.post}>
    <View style={styles.titlebar}>   
      <Text style={styles.title}>{props.title}</Text>
    </View>
    <Text>id: {props.id}</Text>
    <Text>userid: {props.userid}</Text>
    
  </View>
  </View>

const styles = StyleSheet.create({
    post: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgb(235, 235, 224)',
        marginBottom: 8,
        borderWidth: 3,
        borderColor: '#00BFFF',
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titlebar: {
      backgroundColor: '#00BFFF',
      width: 370,
      height: 20,
      alignItems: 'center'
    },
    title: {
      fontSize: 16,
      fontWeight: '400'
    }
  });

  export default EachListItem;
