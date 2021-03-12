import {
  CHANGE_MONTH,
  CHANGE_SELECTED,
  GO_TO_TODAY,
  SET_CHANGE_FUNCTION,
  SET_DISPLAYED_MONTH,
  SET_MONTH,
  SET_YEAR,
} from './actionTypes'

const defaultState = {
  selected: new Date(),
  displayedMonth: new Date(),
  onChangeFunction: () => {},
}

const reducer = {
  [CHANGE_SELECTED](state, payload) {
    const { date } = payload
    state.onChangeFunction(date)
    return { ...state, selected: date }
  },

  [GO_TO_TODAY](state) {
    return { ...state, selected: new Date(), displayedMonth: new Date() }
  },

  [CHANGE_MONTH](state, payload) {
    const { displayedMonth } = state
    const newMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() + payload.increment
    )
    return { ...state, displayedMonth: newMonth }
  },

  [SET_MONTH](state, payload) {
    const displayedMonth = new Date(
      state.displayedMonth.getFullYear(),
      payload.month
    )

    return { ...state, displayedMonth }
  },

  [SET_YEAR](state, payload) {
    const displayedMonth = new Date(
      payload.year,
      state.displayedMonth.getMonth()
    )

    return { ...state, displayedMonth }
  },

  [SET_CHANGE_FUNCTION](state, payload) {
    return { ...state, onChangeFunction: payload.onChangeFunction }
  },

  [SET_DISPLAYED_MONTH](state, payload) {
    return { ...state, displayedMonth: payload.date }
  },
}

export default function (state = defaultState, action) {
  return reducer.hasOwnProperty(action.type)
    ? reducer[action.type](state, action.payload)
    : state
}
