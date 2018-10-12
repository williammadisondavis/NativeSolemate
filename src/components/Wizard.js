
import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Button, Alert, AsyncStorage } from 'react-native';
import axios from 'axios';
import Step from './Step';

class Wizard extends PureComponent {
  static Step = Step;

  state = {
    index: 0,
    values: {
      ...this.props.initialValues,
    },
    jwt: {}
  };

    nextForm = () => {
    if (this.state.index !== this.props.children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  };

  prevForm = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };

  onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
      jwt: {}
    }));
  };
  
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.jwt);
    this.props.navigation('App');
  };

  onSubmit = () => {
    handleInput = async() => {
        const res = await axios.post('http://localhost:3005/register', {
           email: this.state.values.email,
           password: this.state.values.password
        });
        const data = await res.data;
        if (data.jwt === undefined) {
          Alert.alert('Invalid Email, this one already exists. Try again')
        } else {
        this.setState({jwt: data.jwt})
        this._signInAsync()
        }
      };
    handleInput()
  };

  render() {
    return (
      <View style={{ flex: .8 }}>
      <Text style={styles.container}> Sign Up! </Text>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextForm: this.nextForm,
              prevForm: this.prevForm,
              isLast: this.state.index === this.props.children.length - 1,
              onChangeValue: this.onChangeValue,
              values: this.state.values,
              onSubmit: this.onSubmit,
            });
          }

          return null;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      fontSize: 50,
      fontWeight: "200",
    },
  });

export default Wizard;