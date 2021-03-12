import React, { useState } from 'react'

import DateKeeper from './DateKeeper'
import { render } from 'react-dom'

const App = () => {
  const [date, setDate] = useState(new Date(2020, 5, 6))

  return (
    <div>
      <h3>{date.toString()}</h3>
      <DateKeeper date={date} onChange={setDate} />
    </div>
  )
}

render(<App />, document.getElementById('root'))
