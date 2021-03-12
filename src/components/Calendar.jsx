import React, { useEffect } from 'react'
import { changeSelected, setDisplayedMonth, setOnChangeFunction } from '../store/actions'

import MonthLabel from './MonthLabel'
import Navigation from './Navigation'
import Week from './Week'
import WeekdayLabel from './WeekdayLabel'
import { connect } from 'react-redux'
import { getWeeks } from '../dateFunctions'

const style = {
    width: 'fit-content',
    fontFamily: 'sans-serif',
    userSelect: 'none',
    position: 'relative',
}

const Calendar = ({ displayedMonth, date, onChange, setOnChangeFunction, changeSelected, setDisplayedMonth }) => {
    useEffect(() => {
        setDisplayedMonth(date)
        changeSelected(date)
        setOnChangeFunction(onChange)
    }, [])

    return (
        <div style={style}>
            <MonthLabel />
            <Navigation />
            <WeekdayLabel />
            {getWeeks(displayedMonth).map((week, index) =>
                <Week
                    days={week}
                    key={week[0].toString()}
                    isFirst={index === 0}
                />)}
        </div>
    )
}

const mapStateToProps = state => ({
    displayedMonth: state.displayedMonth,
})

const mapDispatchToProps = {
    changeSelected,
    setOnChangeFunction,
    setDisplayedMonth,
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)