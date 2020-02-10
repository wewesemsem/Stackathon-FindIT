import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './style';

export default class CustomItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customItem: '' };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    const newItem = this.state.customItem.trim().toLowerCase();
    let found = false;
    this.props.bannedItems.forEach(item => {
      if (item.name === newItem) {
        found = true;
      }
    });
    if (newItem === '' || newItem === ' ') {
      alert('This field cannot be empty.');
      this.setState({ customItem: '' });
    } else if (found) {
      alert('This ingredient is already listed.');
      this.setState({ customItem: '' });
    } else {
      this.setState({ customItem: '' });
      this.props.handlePress(newItem);
    }
  }
  render() {
    return (
      <View>
        <View style={styles.navigate}>
          <TextInput
            style={styles.input}
            placeholder="Enter an ingredient"
            onChangeText={customItem => this.setState({ customItem })}
            value={this.state.customItem}
            clearTextOnFocus={true}
          />
          <Text>{'  '}</Text>
          <View style={styles.button}>
            <Button
              color="#3E505B"
              title="Add to banned list"
              onPress={this.handlePress}
            />
          </View>
        </View>
      </View>
    );
  }
}
