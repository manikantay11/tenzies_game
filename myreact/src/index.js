import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  // Component start by capital letter only
  return (
    <div>
      <h2>john doe</h2>
      <p>this is my paragraph</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
