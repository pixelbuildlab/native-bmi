import { create, type StateCreator } from 'zustand'
import { SCREEN_LIST } from '../constants'

const INITIAL_STORE_STATE = {
  height: null,
  weight: null,
  isWeightValid: true,
  isHeightValid: true,
  screen: SCREEN_LIST.ONBOARDING,
}
type BMIStoreSlice = {
  height: number | null
  weight: number | null
  isWeightValid: boolean | null
  isHeightValid: boolean | null
  screen: string
  setHeight: (value: number) => void
  setWeight: (value: number) => void
  getBmiIndex: () => { index: string; status: string }
  setScreen: (screen: string) => void
  resetStore: () => void
}

const bMIStoreSlice: StateCreator<BMIStoreSlice> = (set, get, store) => ({
  ...INITIAL_STORE_STATE,
  setHeight: (height) =>
    set((state) => {
      if (height >= 1) {
        return { ...state, height, isHeightValid: true }
      } else {
        return { ...state, height, isHeightValid: false }
      }
    }),
  setWeight: (weight) =>
    set((state) => {
      if (weight && weight >= 1)
        return { ...state, weight, isWeightValid: true }
      else return { ...state, weight, isWeightValid: false }
    }),
  setScreen: (screen) => set((state) => ({ ...state, screen })),
  getBmiIndex: () => {
    const height = get().height
    const weight = get().weight

    if (!weight || !height) return { index: '0', status: 'INVALID' }

    const bmiVal = parseFloat(((weight / height ** 2) * 703).toFixed(2))
    const bmi = `${bmiVal}`
    console.log(bmiVal)
    if (bmiVal < 16.0) {
      return { index: bmi, status: 'UNDERWEIGHT_T1' }
    } else if (bmiVal >= 16.0 && bmiVal <= 16.99) {
      return { index: bmi, status: 'UNDERWEIGHT_T2' }
    } else if (bmiVal >= 17.0 && bmiVal <= 18.49) {
      return { index: bmi, status: 'UNDERWEIGHT_T3' }
    } else if (bmiVal >= 18.5 && bmiVal <= 24.99) {
      return { index: bmi, status: 'NORMAL' }
    } else if (bmiVal >= 25.0 && bmiVal <= 29.99) {
      return { index: bmi, status: 'OVERWEIGHT' }
    } else {
      return { index: bmi, status: 'OBESE' }
    }
  },
  resetStore: () => set(() => ({ ...INITIAL_STORE_STATE })),
})

export const useBMIStore = create<BMIStoreSlice>((set, get, store) => ({
  ...bMIStoreSlice(set, get, store),
}))
