import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';

class Camera extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Camera</Text>
        <Button
          title="See results"
          onPress={() => this.props.navigation.navigate('Results')}
        />
      </View>
    );
  }
}

export default Camera;
