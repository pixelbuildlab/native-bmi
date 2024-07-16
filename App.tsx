import { StatusBar } from 'expo-status-bar'
import Main from './src/Main'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar style='auto' />
      <Main />
    </RootSiblingParent>
  )
}
