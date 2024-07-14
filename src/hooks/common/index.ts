import React from 'react'
import { TranslatedText } from '../../types'
import { NativeModules, Platform } from 'react-native'
import { translation } from '../../utilities/translation'
// type UseTranslationProps = {
//   screen: string
// }
const useTranslation = (screen: string) => {
  const translatedText: TranslatedText = React.useMemo(() => {
    if (Platform.OS === 'ios') {
      const locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      console.log(locale, 'ios')
      return translation[locale]
    } else if (Platform.OS === 'android') {
      const locale = NativeModules.I18nManager.localeIdentifier
      console.log(locale, 'android')
      return translation[locale]
    } else return translation['en_US']
  }, [])
  if (translatedText) {
    return translatedText[screen]
  } else {
    return ''
  }
}

export { useTranslation }
