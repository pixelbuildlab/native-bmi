import { create, type StateCreator } from 'zustand'

const INITIAL_STORE_STATE = {
  height: null,
  weight: null,
}
type BMIStoreSlice = {
  height: number | null
  weight: number | null
  setHeight: (value: number) => void
  setWeight: (value: number) => void
}

const bMIStoreSlice: StateCreator<BMIStoreSlice> = (set, get, store) => ({
  ...INITIAL_STORE_STATE,
  setHeight: (height) => set((state) => ({ ...state, height })),
  setWeight: (weight) => set((state) => ({ ...state, weight })),
})

export const useBMIStore = create<BMIStoreSlice>((set, get, store) => ({
  ...bMIStoreSlice(set, get, store),
}))
