import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { StartWindowScreen } from './src';
import OnboardScreen from './src/componets/onboardcomponent'

class App extends Component {
  render() {
    return (
      <View>
        <StartWindowScreen />
      </View>
    )
  }
}
export default App;
