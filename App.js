import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
  import { Asset, AppLoading } from 'expo';

export default class App extends React.Component {

  render() {
    return (

      <View>
        <WebView
        source={{uri: './webpage/MiktzoaLahim.html'}}
        style={{marginTop: 20}}
      />
      </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
