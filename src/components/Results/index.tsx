import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from '../../hooks/common'
import { SCREEN_LIST } from '../../constants'
import { PressableButton } from '../../sharedComponents'
import AppLayout from '../../AppLayout'

export default function Results() {
  const translatedText = useTranslation(SCREEN_LIST.RESULT)

  const header = (
    <View>
      <Text style={styles.heading}>{translatedText.heading}</Text>
      <Text style={styles.subHeading}>{translatedText.subHeading}</Text>
      <View style={styles.headerResults}>
        <Text style={styles.headerResultData}>{22.5}</Text>
      </View>
    </View>
  )

  const main = (
    <View style={styles.mainResult}>
      <Text style={styles.resultInfoText}>{translatedText.result1}</Text>
      <Text style={styles.resultStatus}>Normal Healthy Weight</Text>
    </View>
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
