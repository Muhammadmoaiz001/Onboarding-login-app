import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'
import Button from '../Components/Button'
import { useNavigation } from '@react-navigation/native'
import { removeItem } from '../global/AysyncStorage'

const Home = () => {
  const navigation=useNavigation()

  // Function to reset onboarding status
  const handleReset = async () => {
    // Remove 'onboarded' item from storage
    await removeItem('onboarded')
    // Navigate to OnboardingScreen
    navigation.navigate('OnboardingScreen')
  };

  return (
    <View style={styles.container}>
      {/* Welcome message */}
      <Text style={styles.attractiveText}>Welcome to Our App!</Text>
      {/* Button to reset onboarding */}
      <Button
        title={"reset onboarding"}
        style={parameters.styledButton2}
        onPress={handleReset}
      />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.logoBackground,
    justifyContent: "center",
    alignItems:'center'
  },
  attractiveText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
});