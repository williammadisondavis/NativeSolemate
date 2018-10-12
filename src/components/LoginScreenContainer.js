import React from 'react';
import LoginSubmission from './LoginSubmission'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
              <LoginSubmission email={email} password={password} navigation={this.props.navigation.navigate}/>
          </View>
      )
  }
};

const styles = StyleSheet.create({
    root: {
      flex: 1,     
      backgroundColor: '#b1c5c6'
    },
    container: {
        flex: 1
    },
  });

export default LoginScreenContainer;