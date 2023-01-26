import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex'
import Items from './components/Items'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import mainimage from './assets/mainimage.svg';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home mainimage={mainimage}/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex  mainimage={mainimage}/>} />
            <Route path='/pokedex/:id' element={<Items mainimage={mainimage} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
