import React from 'react'
import { Image, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { useTranslation } from '../../hooks/common'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'
import { TextInputField } from '../../sharedComponents'
import { useBMIStore } from '../../store'

export default function Onboarding() {
  const translatedText = useTranslation(SCREEN_LIST.ONBOARDING)
  const setHeight = useBMIStore((store) => store.setHeight)
  const height = useBMIStore((store) => store.height)
  const weight = useBMIStore((store) => store.weight)
  const isValidHeight = useBMIStore((store) => store.isHeightValid)
  const isWeightValid = useBMIStore((store) => store.isWeightValid)
  const setWeight = useBMIStore((store) => store.setWeight)
  const setScreen = useBMIStore((store) => store.setScreen)

  const handleHeight = (value: string) => {
    setHeight(Number(value))
    if (!isValidHeight && height !== 0) {
      ToastAndroid.show(translatedText.heightToast, ToastAndroid.SHORT)
    } else if (height === 0 && Number(value) < 1) {
      ToastAndroid.show(
        'Enter valid height in numbers, greater than 0',
        ToastAndroid.SHORT
      )
    }
  }
  const handleWight = (value: string) => {
    setWeight(Number(value))
    if (!isWeightValid && weight !== 0) {
      ToastAndroid.show(translatedText.weightToast, ToastAndroid.SHORT)
    } else if (weight === 0 && Number(value) < 1) {
      ToastAndroid.show(translatedText.heightToast, ToastAndroid.SHORT)
    }
  }
  const disableButton = !isValidHeight || !isWeightValid || !weight || !height
  const handleContinuePress = () => {
    if (disableButton) {
      ToastAndroid.show(translatedText.fieldToast, ToastAndroid.SHORT)
      return
    }
    setScreen(SCREEN_LIST.RESULT)
  }
  const header = (
    <View>
      <Text style={styles.heading}>{translatedText.heading}</Text>
      <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
    </View>
  )

  const main = (
    <>
      <TextInputField
        placeholder={translatedText.placeholderWeight}
        nativeID='weight'
        keyboardType='numeric'
        onChangeText={handleWight}
      />
      <TextInputField
        placeholder={translatedText.placeholderHeight}
        nativeID='height'
        keyboardType='numeric'
        onChangeText={handleHeight}
      />
    </>
  )

  const action = (
    <PressableButton
      title={translatedText.actionButton}
      pressableStyles={disableButton ? { backgroundColor: 'gray' } : {}}
      isDisable={disableButton}
      onPress={handleContinuePress}
    />
  )

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
