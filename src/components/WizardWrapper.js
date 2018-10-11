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
    handle: 'Email here...',
    name: 'email',
  },
  {
    handle: 'What will be your password?',
    name: 'password',
  }
];

export default class WizardWrapper extends React.Component {
  constructor(props) {
  super(props)
  console.log(this);
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
          // navigation={this.props.navigation.navigate}
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
    
    backgroundColor: 'white'
  },
  entireContainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 3,
  },
  container: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
