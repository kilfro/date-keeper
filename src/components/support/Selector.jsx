import OutsideClickHandler from 'react-outside-click-handler'
import PropTypes from 'prop-types'
import React from 'react'

const labelStyle = {
    cursor: 'pointer',
    marginLeft: '1rem',
}

const modalStyle = {
    fontSize: '1rem',
    position: 'absolute',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    boxShadow: '5px 5px 30px rgba(0,0,0,0.5)',
    minHeight: 100,
    minWidth: 100,
    right: '1rem',
}

const Selector = ({ label, labelColor, children, showOptions, onChange }) => {
    return (
        <div>
            <div style={{ ...labelStyle, color: labelColor }} onClick={() => onChange(true)}>{label}</div>
            {showOptions &&
                <OutsideClickHandler onOutsideClick={() => onChange(false)}>
                    <div style={modalStyle}>{children}</div>
                </OutsideClickHandler>
            }
        </div>
    )
}

Selector.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    labelColor: PropTypes.string,
    children: PropTypes.any.isRequired,
    showOptions: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

Selector.defaultProps = {
    labelColor: 'black',
}

export default Selector