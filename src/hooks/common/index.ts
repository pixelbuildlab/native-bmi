import React from 'react'
import { TranslatedText } from '../../types'
import { NativeModules, Platform } from 'react-native'
import { translation } from '../../utilities/translation'

const useTranslation = (screen: string) => {
  const translatedText: TranslatedText = React.useMemo(() => {
    if (Platform.OS === 'ios') {
      const locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      return translation[locale]
    } else if (Platform.OS === 'android') {
      const locale = NativeModules.I18nManager.localeIdentifier
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
