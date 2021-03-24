import Day from '../../src/components/Day'
import { Provider } from 'react-redux'
import React from 'react'
import Week from '../../src/components/Week'
import configureStore from 'redux-mock-store'

const getComponent = (props) => {
  const state = {
    selected: new Date(),
  }
  const store = configureStore([])(state)

  return mount(
    <Provider store={store}>
      <Week {...props} />
    </Provider>
  )
}

describe('Week', () => {
  test('should render all days correctly', () => {
    const days = [
      new Date(2021, 0, 1),
      new Date(2021, 0, 2),
      new Date(2021, 0, 3),
      new Date(2021, 0, 4),
      new Date(2021, 0, 5),
    ]
    const component = getComponent({ days })
    const renderedDays = component.find(Day)

    expect(renderedDays.length).toBe(days.length)

    for (let day of renderedDays) {
      expect(days.includes(day.props.date)).toBeTruthy()
    }
  })

  test('should change style if this is first week', () => {
    const props = {
      days: [new Date()],
      isFirst: true,
    }
    const component = getComponent(props)
    const { style } = component.children().children().get(0).props

    expect(style.marginLeft).toBe('auto')
  })
})
