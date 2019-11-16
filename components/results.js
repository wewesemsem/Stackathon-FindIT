import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';

class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.results.map(foundItem => {
          return <Text> {foundItem} </Text>;
        })}
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

const mapStateToProps = state => {
  console.log('mapping state to results', state);
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps, null)(Results);
