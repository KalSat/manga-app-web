import * as zustand from 'zustand'
import { StateCreator } from 'zustand'
import { act } from '@testing-library/react'

const { create: actualCreate } = jest.requireActual<typeof zustand>('zustand')

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set<() => void>()

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = <S>(createState: StateCreator<S>) => {
  return typeof createState === 'function' ? createInternalFn(createState) : createInternalFn
}

const createInternalFn = <S>(createState: StateCreator<S>) => {
  const store = actualCreate(createState)
  const initialState = store.getState()
  storeResetFns.add(() => store.setState(initialState, true))
  return store
}

// reset all stores after each test run
afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn()
    })
  })
})
