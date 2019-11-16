import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import styles from './style';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

class Camera extends React.Component {
  state = { cameraPermission: null, scanned: false };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ cameraPermission: status });
  }

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({ scanned: true });
    console.log('TYPE', type, 'DATA', data);
    // const res = await axios(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    // console.log(res)
    alert(`Bar code with type ${type} and data ${data} has been scanned :)`);
  };

  render() {
    const { cameraPermission, scanned } = this.state;
    if (cameraPermission !== 'granted') {
      //navigate to settings
      return (
        <View style={styles.container}>
          <Text>Please turn on camera permissions for this app.</Text>
        </View>
      );
    }
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}

export default Camera;
