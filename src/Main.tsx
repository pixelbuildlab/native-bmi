import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Onboarding from './components/Onboarding'
import { useBMIStore } from './store'
import { SCREEN_LIST } from './constants'
import Results from './components/Results'
import { useTranslation } from './hooks/common'

export default function Main() {
  const screen = useBMIStore((store) => store.screen)
  const translation = useTranslation(SCREEN_LIST.WELCOME)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      {screen === SCREEN_LIST.ONBOARDING ? (
        <Onboarding />
      ) : screen === SCREEN_LIST.RESULT ? (
        <Results />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>{translation.relaunch}</Text>
        </View>
      )}
    </View>
  )
}
