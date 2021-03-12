import Calendar from './components/Calendar'
import { Provider } from 'react-redux'
import React from 'react'
import { createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const DateKeeper = (props) => {

    return (
        <Provider store={store}>
            <Calendar {...props}/>
        </Provider>
    )
}

export default DateKeeper