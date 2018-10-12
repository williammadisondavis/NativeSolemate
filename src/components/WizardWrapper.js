import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './Wizard';
import Input from './Input';

const forms = [
  {
    handle: 'First Name?',
    name: 'firstName',
  },
  {
    handle: 'Last Name?',
    name: 'lastName',
  },
  {
    handle: 'Your Email here',
    name: 'email',
    description: '',
  },
  {
    handle: 'What will be your password?',
    name: 'password',
    description: '', 
  }
];

export default class WizardWrapper extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
    return (
      // <View style={styles.entireContainer}>
      <View style={styles.root}>
        <Wizard
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          navigation={this.props.navigation.navigate}
        >
          {forms.map(e => (
            <Wizard.Step key={e.name} navigation={this.props.navigation.navigate}> 
              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                  <Input
                    
                    onChangeValue={onChangeValue}
                    placeholder={e.handle}
                    value={values[e.name]}
                    name={e.name}
                  />
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
    
    backgroundColor: '#b1c5c6'
  },
  entireContainer: {
    flex: 1,
    backgroundColor: '#b1c5c6',
    zIndex: 3,
  },
  container: {
    flex: 3,
    backgroundColor: '#b1c5c6',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
