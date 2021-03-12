import React from 'react'

const getStyle = (label) => {
    let color = 'black'

    if (['СБ', 'ВС'].includes(label)) {
        color = 'red'
    }

    return {
        height: '2rem',
        width: '2rem',
        margin: '0.4rem',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        border: '1px solid white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
    }
}

const containerStyle = {
    display: 'flex',
    width: 'fit-content',
}

const WeekdayLabel = () => {
    const labels = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

    return (
        <div style={containerStyle}>
            {labels.map(label => <div style={getStyle(label)} key={label}>{label}</div>)}
        </div>
    )
}

export default WeekdayLabel