import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, FlatList } from 'react-native';
import getGoals from './getGoals';
import getAllGoals from './getAllGoals';
import getProfile from './getProfile';
import { connect } from 'react-redux';
import EachListItem from './eachItem';


let mapStateToProps = (state) => {

  return (state)
}

let keyExtractor = (item) => String(item.id);

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };



  render() {
    return (
      <EachListItem
        {...this.props}
        onPress={this._onPress}
      />
    )
  }
}



class HomeScreen extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  getUserID = async () => {
    const id = await AsyncStorage.getItem('id')
    return id
  };

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  async componentDidMount() {

    getProfile(this.props.dispatch);
    getGoals(this.props.dispatch);
    getAllGoals(this.props.dispatch);

  }

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      userid={item.userid}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.goal}
      myid={this.getUserID}
    />
  );

  render() {
    // console.log(this.props.goals)
    return (
      <FlatList
        data={this.props.allGoals}
        extraData={this.state}
        keyExtractor={keyExtractor}
        renderItem={this._renderItem}
        contentContainerStyle={styles.container}
      />
    );
  }
}


const styles = StyleSheet.create({
    container: {paddingTop: 40},
  });
  
export default connect(mapStateToProps)(HomeScreen);