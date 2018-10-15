import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen'
import Profile from './Profile';
import axios from 'axios';

let mapStateToProps = (state) => {
    // console.log(state)
    return (state)
}

class ProfileScreenWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        // console.log(props)
        // console.log(this.state)
        // "userProfile": Object {
        //     [23:12:23]     "description": "",
        //     [23:12:23]     "first": "",
        //     [23:12:23]     "goals": "",
        //     [23:12:23]     "last": "",
        //     [23:12:23]     "location": "",
        //     [23:12:23]   },
        // console.log(props)
    }
    async componentDidMount() {
    
        try {
            console.log('madeit')
            console.log(this.props)
            const id = await AsyncStorage.getItem('id')
            if (id !== null) {
                handleInput = async () => {
                    const res = await axios.get(`http://localhost:3005/users/${id}`)
                    const data = await res.data;
                    // console.log(data)
                    if (data !== null) {
                        // console.log(this.props.userProfile)
                        this.setState({profile: data})
                        // console.log(this.state)
                        } else {
                            return (console.log('error'))
                        }
                }
                handleInput(); 
            }
        } catch (e) {
            console.log(e);
        }
    }  



    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };


render() {
    return (
    <View style={styles.container}>
        {this.state.profile ? 
        
            <Profile profile={this.state.profile} signOut={this.signOutAsync} navigator={this.props.navigation.navigate}/>
        :
            <LoadingScreen />
        }
        </View>
    )}
}



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default connect(mapStateToProps)(ProfileScreenWrapper);