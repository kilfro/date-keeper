import {
  CHANGE_MONTH,
  CHANGE_SELECTED,
  GO_TO_TODAY,
  SET_CHANGE_FUNCTION,
  SET_DISPLAYED_MONTH,
  SET_MONTH,
  SET_YEAR,
} from './actionTypes'

export const changeSelected = (date) => ({
  type: CHANGE_SELECTED,
  payload: {
    date,
  },
})

export const changeMonth = (increment) => ({
  type: CHANGE_MONTH,
  payload: {
    increment,
  },
})

export const goToToday = () => ({
  type: GO_TO_TODAY,
})

export const setMonth = (month) => ({
  type: SET_MONTH,
  payload: {
    month,
  },
})

export const setYear = (year) => ({
  type: SET_YEAR,
  payload: {
    year,
  },
})

export const setOnChangeFunction = (func) => ({
  type: SET_CHANGE_FUNCTION,
  payload: {
    onChangeFunction: func,
  },
})

export const setDisplayedMonth = (date) => ({
  type: SET_DISPLAYED_MONTH,
  payload: {
    date,
  },
})
