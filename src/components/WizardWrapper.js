import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Wizard from './Wizard';
import Input from './Input';
import { connect } from 'react-redux';

const forms = [
  {
    handle: 'First Name?',
    name: 'first',
  },
  {
    handle: 'Last Name?',
    name: 'last',
  },
  {
    handle: 'How would you describe yourself as a runner?',
    name: 'description',
  },
  {
    handle: 'location?',
    name: 'location',
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

let mapStateToProps = (state) => {
  console.log(state)
  return (state)
}

class WizardWrapper extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
    return (
      <View style={styles.root}>
      <ImageBackground source={require('../assets/solemate.jpeg')} style={{ width: '100%', height: '100%' }}>
        <Wizard
          initialValues={{
            first: '',
            last: '',
            email: '',
            password: '',
            description: '',
            location: ''
          }}
          navigation={this.props.navigation.navigate}
          dispatch={this.props.dispatch}
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
    
    // backgroundColor: '#FFE5CC'
  },
  entireContainer: {
    flex: 1,
    // backgroundColor: '#FFE5CC',
    zIndex: 3,
  },
  container: {
    flex: 3,
    // backgroundColor: '#FFE5CC',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{

  }
});

export default connect(mapStateToProps)(WizardWrapper)