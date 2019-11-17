import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';

//should make results item its own component
class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          {this.props.results.map(foundItem => {
            return <Text> {foundItem} </Text>;
          })}
        </View>
        <View style={styles.navigate}>
          <View style={styles.button}>
            <Button
              color="#3E505B"
              title="Change Preferences"
              onPress={() => this.props.navigation.navigate('Banned')}
            />
          </View>
          <Text>{'  '}</Text>
          <View style={styles.button}>
            <Button
              color="#3E505B"
              title="Scan Another Item"
              onPress={() => this.props.navigation.navigate('BarScan')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapping state to results', state);
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps, null)(Results);
