import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [color, setColor] = useState('olive') // default background
  return (
    <>
     <div
      className="w-full h-screen transition-colors duration-300"
      style={{ width: "100%", height: "100vh", backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-white/30 px-3 py-2 rounded-3xl">

          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>

          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg font-semibold'
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>

          <button
            //onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold'
            style={{ backgroundColor: 'purple' }}
            onClick={() => setColor('purple')}
          >
            Purple
          </button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
