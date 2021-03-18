import Button from '../../../src/components/support/Button'
import React from 'react'

describe('Button', () => {
  test('should render children', () => {
    const children = 'Button children'
    const component = shallow(<Button>{children}</Button>)

    expect(component.text()).toBe(children)
  })

  test('should apply prop style', () => {
    const style = {
      cursor: 'default',
      color: 'green',
    }
    const component = shallow(<Button style={style}>Text</Button>)
    const renderedStyle = component.get(0).props.style

    expect(renderedStyle.cursor).toBe(style.cursor)
    expect(renderedStyle.color).toBe(style.color)
  })

  test('should apply another props', () => {
    const func = jest.fn()
    const component = shallow(<Button onClick={func}>Text</Button>)
    const { onClick } = component.get(0).props

    expect(onClick).toBe(func)
  })
})
