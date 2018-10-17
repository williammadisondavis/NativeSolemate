
import React, { PureComponent } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class Input extends PureComponent {
  onChangeText = text => {
    this.props.onChangeValue(this.props.name, text);
  };

  render() {
    const { onChangeValue, name, ...rest } = this.props;
    return (
    <View style={styles.root}>
      <TextInput
        style={styles.box}
        {...rest}
        onChangeText={this.onChangeText}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255, 255, 255, .6)',
    width: '75%',
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  box: {
    color: 'black',
    fontSize: 25,
    paddingTop: 6
  }
});

export default Input;
