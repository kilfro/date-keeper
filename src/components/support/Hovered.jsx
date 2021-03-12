import React, {useState} from 'react'

const Hovered = ({style, hoveredStyle, children, ...rest}) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={isHovered ? {...style, ...hoveredStyle} : style}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Hovered