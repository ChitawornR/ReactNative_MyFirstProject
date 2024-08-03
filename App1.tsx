import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

const App = () => {
  return (
    <View style={styles.container}>
      <AppHeader name="Chittaworn Khiri-eksathit" msg="Message from App.tsx"/>
      <AppContent msg="Message from App.tsx" name="Chittaworn Khiri-eksathit"/>
      <AppFooter title="Thai-Nichi Institute of Technology"/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})