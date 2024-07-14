import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Onboarding from './components/Onboarding'

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Onboarding />
    </View>
  )
}
