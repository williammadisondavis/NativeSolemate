import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class ProfileScreenWrapper extends React.Component {
  
    _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="SignOut"
          onPress={() => this._signOutAsync()}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });
  
export default ProfileScreenWrapper;