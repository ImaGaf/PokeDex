import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex'
import Items from './components/Items'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import mainimage from './assets/mainimage.svg';
import Elipse from './assets/Elipse.jpg';

function App() {

  const color = {
    normal: {back: "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)", color: "#735259"},
    fighting: {back: "linear-gradient(176.83deg, #96402A 0.92%, #F1613C 47.96%, #CB735D 99.08%)",color: "96402A" },
    flying: {back: "linear-gradient(177.56deg, #62DB60 0.92%, #3BB039 47.96%, #AAFFA8 99.08%)", color: "#62DB60"},
    poison: {back: "linear-gradient(177.03deg, #5B3184 0.92%, #A564E3 47.96%, #CE9BFF 99.08%)", color: " #5B3184"},
    ground: { back: "linear-gradient(179.75deg, #654008 0.92%, #895C1A 47.96%, #D69638 99.08%)", color: "#654008"},
    rock: { back: "linear-gradient(177.03deg, #7E7E7E 0.92%, #8D8D94 47.96%, #D3D3D3 99.08%)", color: "#7E7E7E"},
    bug:{ back: "linear-gradient(177.56deg, #62DB60 0.92%, #3BB039 47.96%, #AAFFA8 99.08%)", color: "#62DB60"},
    ghost: { back: "inear-gradient(177.03deg, #323569 0.92%, #454AA8 47.96%, #787DDA 99.08%)", color: "#323569"},
    steel: { back: "linear-gradient(179.75deg, #5E736C 0.92%, #728881 47.96%, #A8A8A8 99.08%)", color: " #5E736C"},
    fire: { back: "linear-gradient(176.37deg, #F96D6F 0.92%, #E35825 47.95%, #E8AE1B 99.08%)", color: "#F96D6F"},
    water: { back: "linear-gradient(179.57deg, #133258 0.92%, #1479FB 47.96%, #82B2F1 99.08%)", color: "#133258"},
    grass: { back: "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)", color: "#7EC6C5"},
    electric: { back: "linear-gradient(179.75deg, #0C1395 0.92%, #2B319B 47.96%, #7075D9 99.08%)", color: "#0C1395"},
    psychic: { back: "linear-gradient(179.75deg, #5E736C 0.92%, #728881 47.96%, #A8A8A8 99.08%)", color: "#5E736C"},
    ice: { back: "linear-gradient(177.03deg, #6FBEDF 0.92%, #64CBF5 47.96%, #BDEBFE 99.08%)", color: "#6FBEDF"},
    dragon: { back: "linear-gradient(179.75deg, #478A93 0.92%, #56A4AE 47.96%, #A2BEC1 99.08%)", color: "#478A93"},
    dark: { back: "linear-gradient(177.03deg, #030706 0.92%, #0D1211 47.96%, #5A5E5D 99.08%)", color: "#030706"},
    fairy: { back: "linear-gradient(179.75deg, #971B45 0.92%, #C23867 47.96%, #CD7D98 99.08%)", color: "#971B45"},
}

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home mainimage={mainimage}/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex  mainimage={mainimage} color={color}/>} />
            <Route path='/pokedex/:id' element={<Items color={color} mainimage={mainimage} Elipse={Elipse} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
