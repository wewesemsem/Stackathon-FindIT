import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './style';
import { addBannedItem } from '../store/bannedItems';
import { connect } from 'react-redux';

const bannedItems = [
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
  render() {
    return (
      <View>
        <Picker
          mode={'dropdown'}
          style={{ height: 50, width: 100 }}
          selectedValue={this.state.category}
          onValueChange={this.updateCategory}
        >
          {bannedItems.map(item => {
            return <Picker.Item label={item} value={item} />;
          })}
        </Picker>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBannedItem: bannedItem => dispatch(addBannedItem(bannedItem)),
  };
};

export default connect(null, mapDispatchToProps)(Categories);
