import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';

class bannedItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Select Banned Items: </Text>
        <Button
          title="Scan Item"
          onPress={() => this.props.navigation.navigate('BarScan')}
        />
      </View>
    );
  }
}

export default bannedItems;
