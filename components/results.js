import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';

class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Results</Text>
        <Button
          title="Change Preferences"
          onPress={() => this.props.navigation.navigate('Banned')}
        />
        <Button
          title="Scan Another Item"
          onPress={() => this.props.navigation.navigate('BarScan')}
        />
      </View>
    );
  }
}

export default Results;
