import Hovered from '../../../src/components/support/Hovered'
import React from 'react'

describe('Hovered', () => {
  test('should render children', () => {
    const children = <p>Text</p>
    const component = shallow(<Hovered hoveredStyle={{}}>{children}</Hovered>)

    expect(component.find('p').text()).toBe('Text')
  })

  test('should apply another props', () => {
    const func = () => {}
    const component = shallow(<Hovered hoveredStyle={{}} onClick={func} />)
    const { onClick } = component.get(0).props

    expect(onClick).toBe(func)
  })

  test('should change style if it is hovered', () => {
    const props = {
      style: {
        backgroundColor: 'red',
        color: 'black',
      },
      hoveredStyle: {
        backgroundColor: 'white',
      },
    }
    const component = shallow(<Hovered {...props} />)
    component.simulate('mouseenter')
    let { style } = component.get(0).props

    expect(style.backgroundColor).toBe(props.hoveredStyle.backgroundColor)
    expect(style.color).toBe(props.style.color)

    component.simulate('mouseleave')
    style = component.get(0).props.style
    
    expect(style.backgroundColor).toBe(props.style.backgroundColor)
  })
})
