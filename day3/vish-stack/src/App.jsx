import Skills from './Skills'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq' 
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Form from './Pages/Hooks/Form'
import State from './Pages/Hooks/State'
import Effects from './Pages/Hooks/Effects'
import Reducer from './Pages/Hooks/Reducer'
import ExReducer from './Pages/Hooks/ExReducer'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills skill={["Mano","Tharani","sridhar"]} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About/>} />
      <Route path="/hooks/effects" element={<Effects />} />
      <Route path="/hooks/form" element={<Form />} />
      <Route path="/hooks/state" element={<State />} />
      <Route path="/hooks/reducer" element={<Reducer/>}/>
      <Route path="/hooks/ExReducer" element={<ExReducer/>}/>
    </Routes>
      
    </>
  )
}

export default App
