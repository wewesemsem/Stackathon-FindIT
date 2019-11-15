import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BannedItems, Camera, Results } from './components/';
import store from './store';
import { Provider } from 'react-redux';

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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
