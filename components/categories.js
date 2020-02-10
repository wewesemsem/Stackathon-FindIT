import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import styles from './style';
import { addBannedItem } from '../store/bannedItems';
import { connect } from 'react-redux';

const bannedItems = [
  'SELECT AN ITEM',
  'tree nuts',
  'dairy',
  'meat (excluding seafood)',
  'shellfish',
  'gluten',
  'gelatin',
  'peanuts',
  'alcohol',
  'known carcinogens',
];

class Categories extends Component {
  state = { category: '' };

  updateCategory = category => {
    this.setState({ category: category });
  };

  handlePress = () => {
    const newItem = this.state.category;
    let found = false;
    this.props.userBannedItems.forEach(item => {
      if (item.name === newItem) {
        found = true;
      }
    });
    if (found) {
      alert('This ingredient is already listed.');
    } else {
      this.props.addBannedItem(newItem);
      alert(`Added ${newItem}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          mode={'dropdown'}
          style={{ height: 50, width: 100 }}
          selectedValue={this.state.category}
          onValueChange={this.updateCategory}
        >
          {bannedItems.map(item => {
            return <Picker.Item label={item} value={item} key={item} />;
          })}
        </Picker>
        <View style={styles.button}>
          <Button
            color="#3E505B"
            title="Add to banned list"
            onPress={this.handlePress}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#3E505B"
            title="Back to my banned list"
            onPress={() => this.props.navigation.navigate('Banned')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBannedItem: bannedItem => dispatch(addBannedItem(bannedItem)),
  };
};

const mapStateToProps = state => {
  return {
    userBannedItems: state.bannedItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
