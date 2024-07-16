import Onboarding from './components/Onboarding'
import Results from './components/Results'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import type { RootStackParamList } from './types'
import { SCREEN_LIST } from './constants'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='onboarding'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={SCREEN_LIST.ONBOARDING}
          component={Onboarding}
        />
        <Stack.Screen
          name={SCREEN_LIST.RESULT}
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
