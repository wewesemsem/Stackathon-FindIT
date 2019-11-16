import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';
import ListItem from './listItem';

class bannedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannedItems: ['Peanuts', 'Dairy', 'Gelatin'],
      selectedItems: [],
      customItems: [],
    };
    this.handlePress = this.handlePress.bind(this);
  }
  componentDidMount() {
    console.log('bannedItems component mounted', this.state.selectedItems);
  }
  handlePress(selectedItemName) {
    console.log('button pressed', selectedItemName);
    let selectedItems = [...this.state.selectedItems];
    //if its already selected, deselect
    if (selectedItems.includes(selectedItemName)) {
      const idx = selectedItems.indexOf(selectedItemName);
      selectedItems.splice(idx, 1);
      this.setState({ selectedItems });
    } else {
      //if not selected, add to selected
      this.setState({
        selectedItems: [...this.state.selectedItems, selectedItemName],
      });
    }
  }
  render() {
    console.log('rendering banned', this.state.selectedItems);
    const { bannedItems, selectedItems } = this.state;
    return (
      <View style={styles.container}>
        <Text>Select Banned Items: </Text>
        <ListItem
          handlePress={this.handlePress}
          bannedItems={bannedItems}
          selectedItems={selectedItems}
        />
        <Button
          title="Scan Item"
          onPress={() => this.props.navigation.navigate('BarScan')}
        />
      </View>
    );
  }
}

export default bannedList;
