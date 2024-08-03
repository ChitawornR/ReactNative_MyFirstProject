import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'

const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      <UseEffectExample></UseEffectExample>

    </View>
  )
}

export default App