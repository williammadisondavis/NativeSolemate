import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class HomeScreen extends React.Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button
          title="Go to App"
          onPress={() => this.props.navigation.navigate('App')}
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
  
export default HomeScreen;