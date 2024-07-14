import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from '../../hooks/common'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'
import { TextInputField } from '../../sharedComponents'
import { useBMIStore } from '../../store'

export default function Onboarding() {
  const translatedText = useTranslation(SCREEN_LIST.ONBOARDING)
  const setHeight = useBMIStore((store) => store.setHeight)
  const setWeight = useBMIStore((store) => store.setWeight)

  const header = (
    <View>
      <Text style={styles.heading}>{translatedText.heading}</Text>
      <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
    </View>
  )

  const main = (
    <>
      <TextInputField
        placeholder={translatedText.placeholderHeight}
        nativeID='height'
        keyboardType='numeric'
        onChangeText={(value) => setHeight(Number(value))}
      />
      <TextInputField
        placeholder={translatedText.placeholderWeight}
        nativeID='weight'
        keyboardType='numeric'
        onChangeText={(value) => setWeight(Number(value))}
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
})
