import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BannedList, Camera, Results, Categories } from './components/';
import store from './store';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(config);

const AppNavigator = createStackNavigator(
  //configuration object
  {
    Banned: {
      screen: BannedList,
    },
    Categories: {
      screen: Categories,
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
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default withAuthenticator(App, true);
