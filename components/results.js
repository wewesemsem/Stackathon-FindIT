import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import ResultItem from './resultListItem';
import { clearResultsAction } from '../store/results';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.handleScanAgain = this.handleScanAgain.bind(this);
  }

  handleScanAgain() {
    this.props.clearResults();
    this.props.navigation.navigate('BarScan');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>This item contains: </Text>
        <View style={styles.list}>
          <ResultItem results={this.props.results} />
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
              onPress={this.handleScanAgain}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearResults: () => dispatch(clearResultsAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
