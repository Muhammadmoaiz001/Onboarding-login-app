import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import RootNavigator from './screens/Navigation/RootNavigator'
import { colors } from './global/styles';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar  backgroundColor={colors.logoColor} />
      <RootNavigator />
    </View>
  );
}

export default App

const styles = StyleSheet.create({

})