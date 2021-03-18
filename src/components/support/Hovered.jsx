import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Hovered = ({ style, hoveredStyle, children, ...rest }) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={isHovered ? { ...style, ...hoveredStyle } : style}
            {...rest}
        >
            {children}
        </div>
    )
}

Hovered.propTypes = {
    style: PropTypes.object,
    hoveredStyle: PropTypes.object.isRequired,
    children: PropTypes.any,
}

export default Hovered