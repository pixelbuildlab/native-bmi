import { create, type StateCreator } from 'zustand'

const INITIAL_STORE_STATE = {
  height: null,
  weight: null,
  isWeightValid: true,
  isHeightValid: true,
}
type BMIStoreSlice = {
  height: number | null
  weight: number | null
  isWeightValid: boolean | null
  isHeightValid: boolean | null
  setHeight: (value: number) => void
  setWeight: (value: number) => void
  getBmiIndex: () => { index: number; status: string }
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
  getBmiIndex: () => ({ index: 2, status: 'ok' }),
})

export const useBMIStore = create<BMIStoreSlice>((set, get, store) => ({
  ...bMIStoreSlice(set, get, store),
}))
