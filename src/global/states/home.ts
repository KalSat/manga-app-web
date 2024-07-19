import { create } from 'zustand'

interface CountState {
  count: number
  increase: () => void
}

const useHomeStore = create<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}))

export default useHomeStore
