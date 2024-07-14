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
      <Text>{translatedText.heading}</Text>
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
})
