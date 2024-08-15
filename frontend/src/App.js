import React from "react";
import Login from "./Login";
import Registrar from "./Registrar";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Login/>}></Route>
        <Route path ='/registrar' element={<Registrar/>}></Route>
        <Route path ='/home' element={<Home/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
