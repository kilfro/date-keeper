import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import React, { useState } from 'react'

import Button from './support/Button'
import Hovered from './support/Hovered'
import Selector from './support/Selector'
import { connect } from 'react-redux'
import { getYearSet } from '../dateFunctions'
import { setYear } from '../store/actions'

const getYearStyle = isSelected => ({
    padding: '1rem',
    cursor: 'pointer',
    color: isSelected ? 'red' : 'black',
})

const buttonStyle = {
    paddingTop: '0.7rem'
}

const YearSelector = ({ date, setYear }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [basicYear, setBasicYear] = useState(date.getFullYear())

    const chooseAndClose = year => {
        setYear(year)
        setShowOptions(false)
        setBasicYear(year)
    }

    return (
        <Selector
            label={date.getFullYear()}
            onChange={setShowOptions}
            showOptions={showOptions}
        >
            <Button onClick={() => setBasicYear(basicYear - 9)} style={buttonStyle}><ChevronLeft /></Button>
            <div />
            <Button onClick={() => setBasicYear(basicYear + 9)} style={buttonStyle}><ChevronRight /></Button>

            {getYearSet(basicYear).map(year => (
                <Hovered
                    style={getYearStyle(year === date.getFullYear())}
                    hoveredStyle={{ backgroundColor: '#cbcbcb' }}
                    onClick={() => chooseAndClose(year)}
                    key={year}
                >
                    {year}
                </Hovered>
            ))}
        </Selector>
    )
}

const mapDispatchToProps = {
    setYear
}

export default connect(null, mapDispatchToProps)(YearSelector)