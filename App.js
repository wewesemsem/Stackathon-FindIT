import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BannedItems, Camera, Results } from './components/';

const AppNavigator = createStackNavigator(
  //configuration object
  {
    Banned: {
      screen: BannedItems,
    },
    BarScan: {
      screen: Camera,
    },
    Results: {
      screen: Results,
    },
  },
  //options object
  {
    initialRouteName: 'Banned',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
