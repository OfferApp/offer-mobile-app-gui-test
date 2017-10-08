import React from 'react';
import { View } from 'react-native';
import Offers from './src/Offers';

 export default class App extends React.Component {
   render() {
    return (
      <View style={{ flex: 1 }}>
       <Offers />
      </View>
    );
  }
}
