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
    this.handlePressAdd = this.handlePressAdd.bind(this);
  }

  componentDidMount() {
    this.props.getBannedItems();
  }

  handlePressAdd(item) {
    this.props.addBannedItem(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your banned ingredients:</Text>
        <View style={styles.list}>
          <ListItem bannedItems={this.props.userBannedItems} />
        </View>
        <Text style={styles.text}>Ban an ingredient:</Text>
        <CustomItem
          handlePress={this.handlePressAdd}
          bannedItems={this.props.userBannedItems}
        />
        <Button
          color="#3E505B"
          title="Click here to add categories"
          onPress={() => this.props.navigation.navigate('Categories')}
        ></Button>
        <View style={styles.button}>
          <Button
            color="#3E505B"
            title="Scan My Item"
            onPress={() => this.props.navigation.navigate('BarScan')}
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
