import MonthSelector from './MonthSelector'
import React from 'react'
import YearSelector from './YearSelector'
import {connect} from 'react-redux'

const containerStyle = {
    margin: '0.5rem',
    fontSize: '2.5rem',
    textAlign: 'end',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'flex-end',
}

const MonthLabel = ({displayedMonth}) => {
    return (
        <div style={containerStyle}>
            <MonthSelector date={displayedMonth}/>
            <YearSelector date={displayedMonth}/>
        </div>
    )
}

const mapStateToProps = state => ({
    displayedMonth: state.displayedMonth
})

export default connect(mapStateToProps)(MonthLabel)