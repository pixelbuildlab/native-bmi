import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from './hooks/common'
import { SCREEN_LIST } from './constants'

export default function Main() {
  const translatedText = useTranslation(SCREEN_LIST.ONBOARDING)
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text>{translatedText.heading}</Text>
      </View>
      <View style={styles.main}>
        <Text>center</Text>
      </View>
      <View style={styles.action}>
        <Text>Actions</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
  },
  main: { flex: 4 },
  action: {
    flex: 2,
  },
})
