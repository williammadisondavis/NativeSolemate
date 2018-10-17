import React from 'react';
import LoginSubmission from './LoginSubmission'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
class LoginScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {

        const { email, password } = this.state;



        return (
            <View style={styles.root}>
                <ImageBackground source={require('../assets/solemate.jpeg')} style={{ width: '100%', height: '100%' }}>
                    <LoginSubmission email={email} password={password} navigation={this.props.navigation.navigate} />
                </ImageBackground>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFE5CC'
    },
    container: {
        flex: 1
    },
});

export default LoginScreenContainer;