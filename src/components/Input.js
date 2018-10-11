
import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends PureComponent {
  onChangeText = text => {
    this.props.onChangeValue(this.props.name, text);
  };

  render() {
    const { onChangeValue, name, ...rest } = this.props;
    return (
      <TextInput
        style={styles.root}
        {...rest}
        onChangeText={this.onChangeText}
      />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '75%',
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
});

export default Input;
