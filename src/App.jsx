import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <div className="card">
        {/* Increment button */}
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment → count is {count}
        </button>
      </div>

      <div className="card">
        {/* Decrement button */}
        <button onClick={() => setCount((prev) => prev - 1)}>
          Decrement → count is {count}
        </button>
      </div>

      
    </>
  )
}

export default App
