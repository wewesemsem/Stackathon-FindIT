import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';
import ListItem from './listItem';
import { addBannedItems } from '../store/bannedItems';
import { connect } from 'react-redux';
import CustomItem from './customItem';

class bannedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannedItems: [
        'Tree Nuts',
        'Dairy',
        'Meat (excluding seafood)',
        'Shellfish',
        'Gluten',
        'Gelatin',
        'Peanuts',
        'Alcohol',
        'Known Carcinogens',
      ],
      selectedItems: [],
      customItems: [],
    };
    this.handlePressScan = this.handlePressScan.bind(this);
    this.handlePressItem = this.handlePressItem.bind(this);
    this.handlePressAdd = this.handlePressAdd.bind(this);
  }

  componentDidMount() {
    console.log('bannedItems component mounted', this.state.selectedItems);
  }

  handlePressAdd(item) {
    this.setState({
      bannedItems: [...this.state.bannedItems, item],
      selectedItems: [...this.state.selectedItems, item],
    });
  }

  handlePressScan() {
    this.props.addBannedItems(this.state.selectedItems);
    this.props.navigation.navigate('BarScan');
  }

  handlePressItem(selectedItemName) {
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
        <Text style={styles.text}>Tap an ingredient to ban it!</Text>
        <View style={styles.list}>
          <ListItem
            handlePress={this.handlePressItem}
            bannedItems={bannedItems}
            selectedItems={selectedItems}
          />
        </View>
        <CustomItem
          bannedItems={bannedItems}
          selectedItems={selectedItems}
          handlePress={this.handlePressAdd}
        />
        <View style={styles.button}>
          <Button
            color="#3E505B"
            title="Scan My Item"
            onPress={this.handlePressScan}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBannedItems: bannedItems => dispatch(addBannedItems(bannedItems)),
  };
};

export default connect(null, mapDispatchToProps)(bannedList);
