import {
  changeMonth,
  changeSelected,
  goToToday,
  setDisplayedMonth,
  setMonth,
  setOnChangeFunction,
  setYear,
} from '../../src/store/actions'

import { isToday } from '../../src/dateFunctions'
import reducer from '../../src/store/reducer'

describe('Reducer', () => {
  test('should return default state', () => {
    const returnedState = reducer(undefined, goToToday())

    expect(returnedState).not.toBeUndefined()
  })

  test('should return current state if action type is unknown', () => {
    const state = { date: new Date() }
    const returnedState = reducer(state, { type: 'UNKNOWN_TYPE' })

    expect(returnedState).toBe(state)
  })

  test('should change selected date', () => {
    const state = {
      selected: new Date(2021, 0, 1),
      onChangeFunction: () => {},
    }
    const newSelected = new Date(2020, 10, 10)
    const action = changeSelected(newSelected)
    const returnedState = reducer(state, action)

    expect(returnedState.selected).toBe(newSelected)
  })

  test('should change selected day and displayed month', () => {
    const state = {
      selected: new Date(2020, 0, 1),
      displayedMonth: new Date(2020, 0, 2),
    }
    const action = goToToday()
    const returnedState = reducer(state, action)

    expect(isToday(returnedState.selected)).toBeTruthy()
    expect(isToday(returnedState.displayedMonth)).toBeTruthy()
  })

  test('should change dysplayed month', () => {
    const state = { displayedMonth: new Date(2021, 0, 1) }
    const action = changeMonth(2)
    const returnedState = reducer(state, action)

    expect(returnedState.displayedMonth.getMonth()).toBe(2)
  })

  test('should set dysplayed month', () => {
    const state = { displayedMonth: new Date(2021, 0, 1) }
    const action = setMonth(5)
    const returnedState = reducer(state, action)

    expect(returnedState.displayedMonth.getMonth()).toBe(5)
  })

  test('should set dysplayed year', () => {
    const state = { displayedMonth: new Date(2021, 0, 1) }
    const action = setYear(2030)
    const returnedState = reducer(state, action)

    expect(returnedState.displayedMonth.getFullYear()).toBe(2030)
  })

  test('should set change function', () => {
    const onChange = jest.fn()
    const action = setOnChangeFunction(onChange)
    const returnedState = reducer(undefined, action)

    expect(returnedState.onChangeFunction).toBe(onChange)
  })

  test('should set displayed month', () => {
    const state = { dysplayedMonth: undefined }
    const date = new Date(2021, 1, 21)
    const action = setDisplayedMonth(date)
    const returnedState = reducer(state, action)

    expect(returnedState.displayedMonth).toBe(date)
  })
})
