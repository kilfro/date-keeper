export const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6

export const isToday = (date) => {
    const today = new Date()
    return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
}

export const isSelected = (date, selected) => {
    return date.getFullYear() === selected.getFullYear()
        && date.getMonth() === selected.getMonth()
        && date.getDate() === selected.getDate()
}

export const getWeeks = (date) => {
    const weeks = [], year = date.getFullYear(), month = date.getMonth()
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate()
    let newWeek = []

    for (let day = 1; day <= lastDayOfMonth; day++) {
        const newDay = new Date(year, month, day)
        newWeek.push(newDay)

        if (newDay.getDay() === 0 || day === lastDayOfMonth) {
            weeks.push(newWeek)
            newWeek = []
        }
    }

    return weeks
}

export const getYearSet = (basicYear) => {
    const yearSet = []
    for(let year = basicYear - 4; year <= basicYear + 4; year++) {
        yearSet.push(year)
    }

    return yearSet
}