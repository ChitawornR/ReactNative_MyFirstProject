import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'

const App = () => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/> */}
      <FlatListcallBackend/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})