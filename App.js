import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { Heading, Image, NavigationBar, Title, Icon } from '@shoutem/ui'

console.disableYellowBox = true

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontsAreLoaded: false
  }

  async componentWillMount () {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
    })

    this.setState({ fontsAreLoaded: true })
  }

  render () {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b4565'
    // ,#302b63, #24243e)'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#ce7eca',
    shadowColor: 'rgba(0,0,0,0.30)',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 20
  }
})
