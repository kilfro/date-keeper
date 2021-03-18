import PropTypes from 'prop-types'
import React from 'react'

const defaultStyle = {
    textAlign: 'center',
    cursor: 'pointer',
}

const Button = ({ children, style, ...rest }) => <div {...rest} style={{ ...defaultStyle, ...style }}>{children}</div>

Button.propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object,
}

export default Button