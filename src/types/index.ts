export type OnboardingTranslation = {
  heading: string
  subHeading: string
  text: string
  placeholderWeight: string
  placeholderHeight: string
  inputError: string
  actionButton: string
  heightToast: string
  weightToast: string
  fieldToast: string
}

export type ResultTranslation = {
  heading: string
  subHeading: string
  result1: string
  actionButton: string
  UNDERWEIGHT_T1: string
  UNDERWEIGHT_T2: string
  UNDERWEIGHT_T3: string
  NORMAL: string
  OVERWEIGHT: string
  OBESE: string
  INVALID: string
}

export type WelcomeTranslation = {
  relaunch: string
}

type LanguageTranslations = {
  onboarding: OnboardingTranslation
  result: ResultTranslation
  welcome: WelcomeTranslation
}

type Translation = {
  [key: string]: LanguageTranslations
}

export type { Translation }

export type RootStackParamList = {
  onboarding: undefined
  result: undefined
}
