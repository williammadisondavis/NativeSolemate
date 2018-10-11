import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Step extends PureComponent {
  constructor(props) {
    super(props)
    console.log(this);
    }
  state = {};
  render() {
    return (
      <View style={styles.root}>
        {this.props.children({
          onChangeValue: this.props.onChangeValue,
          values: this.props.values,
        })}
        <View style={styles.buttonWrapper}>
          <Button
            title="Previous"
            disabled={this.props.currentIndex === 0}
            onPress={this.props.prevForm}
          />
          {this.props.isLast ? (
            <Button title="Submit" onPress={this.props.onSubmit} />
            //login true
          ) : (
            <Button title="Next" onPress={this.props.nextForm} />
          )}
          
        </View>
        <Button
          title="Go to Sign In"
          onPress={() => this.props.navigation('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 50,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Step;