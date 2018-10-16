import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen'
import Profile from './Profile';
import axios from 'axios';
import getGoals from './getGoals';
import getProfile from './getProfile';

let mapStateToProps = (state) => {
    return (state)
}

class ProfileScreenWrapper extends React.Component {


    async componentDidMount() {

                getProfile(this.props.dispatch);
                getGoals(this.props.dispatch);
 
    }
    



    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };


render() {

    return (
    <View style={styles.container}>
        {this.props.userProfile ? 
        
            <Profile profile={this.props.userProfile} goals={this.props.goals} signOut={this.signOutAsync} navigator={this.props.navigation.navigate}/>
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