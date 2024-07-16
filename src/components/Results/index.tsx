import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CommonActions } from '@react-navigation/native'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'
import { useBMIStore } from '../../store'
import { useTranslation } from '../../hooks'
import type { ResultTranslation, RootStackParamList } from '../../types'

type ResultsProps = NativeStackScreenProps<RootStackParamList>

export default function Results({ navigation }: ResultsProps) {
  const translatedText = useTranslation<ResultTranslation>(SCREEN_LIST.RESULT)
  const resetStore = useBMIStore((store) => store.resetStore)
  const getBmiIndex = useBMIStore((store) => store.getBmiIndex)

  const handleResetPress = () => {
    resetStore()
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN_LIST.ONBOARDING }],
      })
    )
  }

  const index = getBmiIndex().index
  const status = getBmiIndex().status

  const header = (
    <View>
      <Text style={styles.heading}>{translatedText.heading}</Text>
      <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
      <View style={styles.headerResults}>
        <Text style={styles.headerResultData}>{index}</Text>
      </View>
    </View>
  )

  const main = (
    <View style={styles.mainResult}>
      <Text style={styles.resultInfoText}>{translatedText.result1}</Text>
      <Text style={styles.resultStatus}>
        {translatedText[status as keyof ResultTranslation]}
      </Text>
    </View>
  )

  const action = (
    <PressableButton
      title={translatedText.actionButton}
      onPress={handleResetPress}
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
  headerResults: {
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerResultData: { fontSize: 70, color: '#fff', fontWeight: '700' },
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
  mainResult: { marginTop: 24, gap: 8, alignItems: 'center' },
  resultInfoText: {
    fontSize: 18,
  },
  resultStatus: {
    fontSize: 24,
    fontWeight: '700',
    color: 'purple',
  },
})
