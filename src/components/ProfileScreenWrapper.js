import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen'
import Profile from './Profile';
import axios from 'axios';

let mapStateToProps = (state) => {
    console.log('HFSFLK:HS:HFSHFHIUEFHIUEFIUEHFIUHEFIHIUEFHUI')
    console.log(JSON.stringify(state))
    return (state)
}

class ProfileScreenWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
        // console.log(props)
    }
    async componentDidMount() {
    
        try {
            // console.log('madeit')
            // console.log(this.props)
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
                        }   getGoals = async () => {
                            const res = await axios.get(`http://localhost:3005/goals/${id}`)
                            const data = await res.data
                            data.goals.map(goal => {
                                this.state.goals.push(goal)
                                // console.log(goal)
                                this.props.dispatch({type: 'ADD_GOAL', newGoal: goal})
                            })
                            
                        }
                        getGoals();

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