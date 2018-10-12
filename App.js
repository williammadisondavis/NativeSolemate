import HomeScreen from './src/components/HomeScreen.js';
import WizardWrapper from './src/components/WizardWrapper';
import LoginScreenContainer from './src/components/LoginScreenContainer'
import ProfileScreenWrapper from './src/components/ProfileScreenWrapper'
import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';


class App extends React.Component  {
  render()
  {
    return <View><Text>hi</Text></View>
  }
}

// let tabNav = createBottomTabNavigator({
//   Home: HomeScreen,
//   Profile: SignUpScreenWrapper,
//   Signup: WizardWrapper,
//   Login: LoginScreenWrapper
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const AppStack = createBottomTabNavigator({ Home: HomeScreen, Profile: ProfileScreenWrapper});
const AuthStack = createStackNavigator({ SignUp: WizardWrapper, SignIn: LoginScreenContainer });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
