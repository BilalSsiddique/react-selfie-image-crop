import './App.css'
import CaptureCard from './CaptureScreen'
import { useState } from 'react'
import { Success } from './Success'
import { Success2 } from './Success2'
import { Success3 } from './Success3'
import { Success4 }  from './Success4'
import { Routes, Route } from 'react-router-dom'
import Ocr  from './Components/Ocr'

function App() {
  const [input, setInput] = useState('')

  return (
    <main className="App">
      <Routes>
        <Route
          path="/"
          element={<CaptureCard inputt={input} setinput={setInput} />}
        ></Route>
        <Route
          path="/success"
          element={<Success inputt={input.trim() === '' ? '' : input} />}
        ></Route>
        <Route
          path="/success2"
          element={<Success2 inputt={input.trim() === '' ? '' : input} />}
        ></Route>
        <Route
          path="/success3"
          element={<Success3 inputt={input.trim() === '' ? '' : input} />}
        ></Route>
        <Route
          path="/ocr"
          element={<Ocr />}
        ></Route>
        <Route
          path="/ocr/success4"
          element={<Success4 inputt={input.trim() === '' ? '' : input} />}
        ></Route>

      </Routes>
    </main>
  )
}

export default App
