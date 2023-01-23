import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/quote";
import Register1 from "./pages/test";

const App = () => {
  const user = localStorage.getItem("token")
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/login" exact element={<Login/>} />
      <Route path="/reg" exact element={<Register/>} />
      <Route path="/" exact element={<Register1/>} />
      { user && <Route path="/dashboard" exact element={<Dashboard/>} />}
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;