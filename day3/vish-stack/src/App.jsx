// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Skills from "./Skills";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import About from "./Pages/About";

import Form from "./Pages/Hooks/Form";
import State from "./Pages/Hooks/State";
import Effect from "./Pages/Hooks/Effect";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills skill={["Mano","Tharani","sridhar"]} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />

        <Route path="/hooks/form" element={<Form />} />
        <Route path="/hooks/State" element={<State />} />
        <Route path="/hooks/Effect" element={<Effect />} />
      </Routes>
    </>
  );
}

export default App;
