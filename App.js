import React from 'react';
import Expo, { AppLoading } from 'expo';
import { View } from 'react-native';
import Offers from './src/Offers';

 export default class App extends React.Component {
   constructor() {
     super();
     this.state = {
       isReady: false
     };
   }

   async componentWillMount() {
     await Expo.Font.loadAsync({
       Roboto: require('native-base/Fonts/Roboto.ttf'),
       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
       Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
     });

     this.setState({ isReady: true });
 }
   render() {
       if (this.state.isReady) {
       return (
         <View style={{ flex: 1 }}>
          <Offers />
         </View>
       );
     }
     return <AppLoading />;
   }
}
