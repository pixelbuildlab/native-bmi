// Main.js
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useTranslation } from '../../hooks/common'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'

export default function Onboarding() {
  const translatedText = useTranslation(SCREEN_LIST.ONBOARDING)

  const header = (
    <View>
      <Text style={styles.heading}>{translatedText.heading}</Text>
      <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
    </View>
  )

  const main = (
    <>
      <TextInput
        placeholder={translatedText.placeholderHeight}
        style={styles.field}
      />
      <TextInput
        placeholder={translatedText.placeholderWeight}
        style={styles.field}
      />
    </>
  )

  const action = <PressableButton title={translatedText.actionButton} />

  return (
    <AppLayout
      header={header}
      main={main}
      action={action}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    padding: 22,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    color: 'white',
  },
  field: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
})
