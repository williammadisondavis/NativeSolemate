import HomeScreen from './src/components/HomeScreen.js';
import WizardWrapper from './src/components/WizardWrapper';
import LoginScreenContainer from './src/components/LoginScreenContainer';
import ProfileScreenWrapper from './src/components/ProfileScreenWrapper';
import EditGoals from './src/components/GoalsScreen'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/components/store';
import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


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

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const ProfileStack = createStackNavigator({Profile: ProfileScreenWrapper, GoalsScreen: EditGoals})
const AppStack = createBottomTabNavigator({ Home: HomeScreen, Profile: ProfileStack});
const AuthStack = createStackNavigator({ SignUp: WizardWrapper, SignIn: LoginScreenContainer });



let Solemate = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

let App = () => 
  <Provider store={store}>
      <Solemate />
  </Provider>

export default App

