import React from 'react'

const defaultStyle = {
    textAlign: 'center',
    cursor: 'pointer',
}

const Button = ({children, style, ...rest}) => <div {...rest} style={{...defaultStyle, ...style}}>{children}</div>

export default Button