import React from "react";
// import Navbar from "./Navbar";
import Card from "./components/Card"
import {Route,Routes } from "react-router-dom"
import Main from "./pages/Main"
import Rest from "./pages/Restaurant"
import Restaurant from "./pages/Restaurant";



function App() {


  return (
    <div>

    <Routes>
      <Route exact path="/" element= {<Main/>} />
      <Route path="/wallet" element= {<Card/>} />
      <Route path="/rest" element= {<Rest/>} />
      <Route path="/restraunt/:id" element={<Restaurant/>} />
    </Routes>
    {/* <Routes> */}
      {/* <Route path="/" element={<Card />} /> */}
      {/* <R  oute path="/payemnt" element={<Card />} /> */}

    {/* </Routes> */}
   
    </div>
  );
}

export default App;
