import { HashRouter, Routes, Route } from 'react-router';
import { EntireApp } from './assets/sections/EntireApp'
import { NewestCar } from './assets/sections/NewestCar'
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<EntireApp />} />
          <Route path="cars" element={<NewestCar />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
