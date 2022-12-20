import { Routes, Route } from "react-router-dom"

import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import {About } from "./components/About"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="services" element={ <Services/> } />

      </Routes>

      <Footer />
    </ >
  )
}

export default App
