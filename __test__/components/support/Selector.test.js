import React from 'react'
import Selector from '../../../src/components/support/Selector'

describe('Selector', () => {
  test('should render label correctly', () => {
    const props = {
      label: 'Test',
      labelColor: 'green',
      showOptions: false,
      onChange: () => {},
    }
    const component = shallow(<Selector {...props}>Choose it</Selector>)
    const label = component.children().get(0)

    expect(label.props.children).toBe(props.label)
    expect(label.props.style.color).toBe(props.labelColor)
  })

  test('should call onChange function', () => {
    const props = {
      label: 'Test',
      labelColor: 'green',
      showOptions: false,
      onChange: jest.fn(),
    }
    const component = shallow(<Selector {...props}>Choose it</Selector>)
    component.children().simulate('click')

    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
