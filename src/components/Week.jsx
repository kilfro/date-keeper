import React from 'react'
import Day from './Day'

const getStyle = (isFirst) => ({
    display: 'flex',
    width: 'fit-content',
    marginLeft: isFirst ? 'auto' : 0,
})

const Week = ({days, isFirst, onChange}) => <div style={getStyle(isFirst)}>
    {days.map(day => <Day date={day} key={day.toString()} onChange={onChange}/>)}
</div>

export default Week