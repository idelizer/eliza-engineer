import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/src/assets/headshot.jpg" id="headshot"></img>
      </div>
      <h1>Eliza Cantwell</h1>
      <h2>Software Engineer</h2>
      <p>elizaofthebay@gmail.com | (510) 725-9999 | Bay Area, CA</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          poke me {count}
        </button>
      </div>
    </div>
  )
}

export default App
