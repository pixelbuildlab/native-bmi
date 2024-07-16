import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Toast from 'react-native-root-toast'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'
import { TextInputField } from '../../sharedComponents'
import { useBMIStore } from '../../store'
import type { OnboardingTranslation, RootStackParamList } from '../../types'
import { useTranslation } from '../../hooks'

type OnboardingProps = NativeStackScreenProps<RootStackParamList>

export default function Onboarding({ navigation }: OnboardingProps) {
  const translatedText = useTranslation<OnboardingTranslation>(
    SCREEN_LIST.ONBOARDING
  )
  const setHeight = useBMIStore((store) => store.setHeight)
  const height = useBMIStore((store) => store.height)
  const weight = useBMIStore((store) => store.weight)
  const isValidHeight = useBMIStore((store) => store.isHeightValid)
  const isWeightValid = useBMIStore((store) => store.isWeightValid)
  const setWeight = useBMIStore((store) => store.setWeight)

  const handleHeight = (value: string) => {
    setHeight(Number(value))
    if (!isValidHeight && height !== 0) {
      Toast.show(translatedText.heightToast)
    } else if (height === 0 && Number(value) < 1) {
      Toast.show(translatedText.heightToast)
    }
  }
  const handleWight = (value: string) => {
    setWeight(Number(value))
    if (!isWeightValid && weight !== 0) {
      Toast.show(translatedText.weightToast)
    } else if (weight === 0 && Number(value) < 1) {
      Toast.show(translatedText.weightToast)
    }
  }

  const disableButton = !isValidHeight || !isWeightValid || !weight || !height

  const handleContinuePress = () => {
    if (disableButton) {
      Toast.show(translatedText.fieldToast)
      return
    }
    navigation.navigate(SCREEN_LIST.RESULT)
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
