import {isSelected, isToday, isWeekend} from '../dateFunctions'

import React from 'react'
import {changeSelected} from '../store/actions'
import {connect} from 'react-redux'

const getStyle = (date, selected) => {
    let color = 'black'
    let backgroundColor = 'white'
    let border = '1px solid white'

    if (isWeekend(date)) {
        color = 'red'
    }

    if (isToday(date)) {
        border = `1px solid ${color}`
    }

    if (isSelected(date, selected)) {
        backgroundColor = color
        color = 'white'
    }

    return {
        height: '2rem',
        width: '2rem',
        margin: '0.4rem',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transitionDuration: '150ms',
        color,
        backgroundColor,
        border,
    }
}

export const Day = ({date, selected, changeSelected}) => {
    const changeHandler = () => changeSelected(date)

    return <div style={getStyle(date, selected)} onClick={changeHandler}>{date.getDate()}</div>
}

const mapStateToProps = state => ({
    selected: state.selected
})

const mapDispatchToProps = {
    changeSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)