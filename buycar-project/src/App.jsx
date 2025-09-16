import { Routes, Route } from 'react-router';
import { EntireApp } from './assets/sections/EntireApp'
import { NewestCar } from './assets/sections/NewestCar'
import './App.css'

function App() {

  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<EntireApp />} />
      <Route path="/cars" element={<NewestCar />} />
    </Routes>
    </div>
  );
}

export default App
