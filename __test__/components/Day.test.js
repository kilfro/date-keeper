import { Day } from '../../src/components/Day'
import React from 'react'

describe('Day component', () => {
  test('should render correctly', () => {
    const props = {
      date: new Date(2020, 5, 1),
      selected: new Date(2021, 0, 1),
    }
    const component = shallow(<Day {...props} />)
    expect(component).toMatchSnapshot()
  })

  test("should render correctly if this day's selected", () => {
    const props = {
      date: new Date(2020, 5, 1),
      selected: new Date(2020, 5, 1),
    }
    const component = shallow(<Day {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('should render correctly if this is today', () => {
    const props = {
      date: new Date(),
      selected: new Date(2020, 5, 1),
    }
    const component = shallow(<Day {...props} />)
    const border = component.get(0).props.style.border
    const [, , color] = border.split(' ')
    expect(color).toBe('black')
  })

  test('should render correctly if this is weekend', () => {
    const props = {
      date: new Date(2021, 2, 14),
      selected: new Date(),
    }
    const component = shallow(<Day {...props} />)
    const { color } = component.get(0).props.style
    expect(color).toBe('red')
  })
})
