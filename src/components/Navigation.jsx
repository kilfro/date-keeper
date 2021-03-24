import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { changeMonth, goToToday } from '../store/actions'

import Button from './support/Button'
import React from 'react'
import { connect } from 'react-redux'

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
}

const Navigation = ({ goToToday, changeMonth }) => (
    <div style={containerStyle}>
        <Button onClick={() => changeMonth(-1)}><ChevronLeft /></Button>
        <Button onClick={goToToday}>сегодня</Button>
        <Button onClick={() => changeMonth(1)}><ChevronRight /></Button>
    </div>
)

const mapDispatchToProps = {
    goToToday,
    changeMonth,
}

export default connect(null, mapDispatchToProps)(Navigation)