import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Inicio from "./Components/Inicio";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import Header from "./Components/HEADER.JSX";
import {styled  } from "styled-components";
function App() {
  return(
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/projetos" element={<Projetos/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
  </Routes>
  </BrowserRouter>

    </>
    )
}export default App