import Day from './Day'
import PropTypes from 'prop-types'
import React from 'react'

const getStyle = (isFirst) => ({
    display: 'flex',
    width: 'fit-content',
    marginLeft: isFirst ? 'auto' : 0,
})

const Week = ({ days, isFirst }) => <div style={getStyle(isFirst)}>
    {days.map(day => <Day date={day} key={day.toString()} />)}
</div>

Week.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFirst: PropTypes.bool,
}

export default Week