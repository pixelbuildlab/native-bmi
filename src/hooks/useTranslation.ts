import React from 'react'
import { NativeModules, Platform } from 'react-native'
import { translation } from '../utilities/translation'
import { Translation } from '../types'

type TranslationScreen = keyof Translation['en_US']

const useTranslation = <T extends Translation['en_US'][TranslationScreen]>(
  screen: TranslationScreen
): T => {
  const translatedText = React.useMemo(() => {
    let locale: string | undefined

    if (Platform.OS === 'ios') {
      locale =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
    } else if (Platform.OS === 'android') {
      locale = NativeModules.I18nManager.localeIdentifier
    } else {
      locale = 'en_US'
    }
    return (
      translation[locale as keyof typeof translation] || translation['en_US']
    )
  }, [])

  const screenTranslation =
    (translatedText[screen] as T) || (translation['en_US'][screen] as T)

  return screenTranslation
}

export { useTranslation }
