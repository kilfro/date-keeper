import React, {useState} from 'react'

import Hovered from './support/Hovered'
import Selector from './support/Selector'
import {connect} from 'react-redux'
import {setMonth} from '../store/actions'

const getMonthStyle = (isSelected) => ({
    color: isSelected ? 'red' : 'inherit',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '0.7rem',
    transitionDuration: '200ms',
})

const hoveredMonthStyle = {
    backgroundColor: '#cbcbcb',
}

const months = [
    'январь', 'февраль', 'март',
    'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь',
    'октябрь', 'ноябрь', 'декабрь',
]

const MonthSelector = ({date, setMonth}) => {
    const [showOptions, setShowOptions] = useState(false)

    const chooseAndClose = (month) => {
        setMonth(month)
        setShowOptions(false)
    }

    return (
        <Selector
            label={date.toLocaleString('ru', {month: 'long'})}
            labelColor={'red'}
            onChange={setShowOptions}
            showOptions={showOptions}
        >
            {months.map((month, index) =>
                <Hovered
                    style={getMonthStyle(index === date.getMonth())}
                    hoveredStyle={hoveredMonthStyle}
                    onClick={() => chooseAndClose(index)}
                    key={month}
                >
                    {month}
                </Hovered>)
            }
        </Selector>
    )
}

const mapDispatchToProps = {
    setMonth
}

export default connect(null, mapDispatchToProps)(MonthSelector)