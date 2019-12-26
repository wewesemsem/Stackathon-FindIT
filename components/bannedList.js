import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';
import ListItem from './listItem';
import { addBannedItem, getBannedItems } from '../store/bannedItems';
import { connect } from 'react-redux';
import CustomItem from './customItem';

class bannedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannedItems: [
        'tree nuts',
        'dairy',
        'meat (excluding seafood)',
        'shellfish',
        'gluten',
        'gelatin',
        'peanuts',
        'alcohol',
        'known carcinogens',
      ],
      selectedItems: [],
      customItems: [],
    };
    this.handlePressScan = this.handlePressScan.bind(this);
    this.handlePressItem = this.handlePressItem.bind(this);
    this.handlePressAdd = this.handlePressAdd.bind(this);
  }

  componentDidMount() {
    //get banned items for current user
    this.props.getBannedItems();
  }

  handlePressAdd(item) {
    // this.setState({
    //   bannedItems: [...this.state.bannedItems, item],
    //   selectedItems: [...this.state.selectedItems, item],
    // });
    this.props.addBannedItem(item);
  }

  handlePressScan() {
    // this.props.addBannedItems(this.state.selectedItems);
    this.props.navigation.navigate('BarScan');
  }

  handlePressItem(selectedItemName) {
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
  //render a view of drop down --> on click selected drop down, add to banned items
  //render a list of banned items
  render() {
    const { bannedItems, selectedItems } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select a category to ban:</Text>
        <View style={styles.list}>
          <ListItem
            handlePress={this.handlePressItem}
            bannedItems={this.props.userBannedItems}
            selectedItems={selectedItems}
          />
        </View>
        <Text style={styles.text}>Ban a custom ingredient:</Text>
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
    getBannedItems: () => dispatch(getBannedItems()),
    addBannedItem: bannedItem => dispatch(addBannedItem(bannedItem)),
  };
};

const mapStateToProps = state => {
  return {
    userBannedItems: state.bannedItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(bannedList);
