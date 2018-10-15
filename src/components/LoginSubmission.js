import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Alert,

    TextInput
  } from 'react-native';
import axios from 'axios';

class LoginSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            }
            id: {}
            jwt: {};
        }
        
    _signInAsync = async () => {
        await AsyncStorage.multiSet([ ['userToken', this.state.jwt] , ['id', JSON.stringify(this.state.id)]])
        .then(this.props.navigation('App'));
        };

    submitForm = (e) => {
        e.preventDefault();
        handleInput = async() => {
            const res = await axios.post('http://localhost:3005/login', {
                email: this.state.email,
                password: this.state.password
            });
            const data = await res.data
            if (data.token === undefined) {
                Alert.alert('Invalid Email, Please try again.')
                } else {
                this.setState({id: data.token.id})
                this.setState({jwt: data.token.token})
                    
                this._signInAsync()
                }
        }
        handleInput();    
    }

    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In!</Text>
            <View >
            <TextInput style={styles.inputBox} type='text' onChangeText={(text) => { this.setState({email: text}) }} placeholder={'Enter Your Email'} />
            <View style={styles.spacer} />
            <TextInput style={styles.inputBox} type='text' onChangeText={(text) => { this.setState({password: text}) }} placeholder={'Enter Your Password'} />
            </View>
            <Button title='Login' type='submit' onPress={this.submitForm} />
        </View>
    )
}
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 140,
        paddingBottom: 50,
    },
    title: {
        alignSelf: 'center',
        fontSize: 55,
        fontWeight: "200"
    },
    inputBox: {
        backgroundColor: 'white',
        width: 280,
        height: 45,
        paddingHorizontal: 16,
        borderRadius: 6,
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: 'black',
        shadowOpacity: 0.5
      },
      spacer: {
          paddingTop: 30
      }
  });


export default LoginSubmission;