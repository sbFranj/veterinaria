import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ListVeterinario from './veterinarios/listVeterinarios.jsx'
import Veterinario from './veterinarios/veterinario.jsx'
import AddVeterinario from './veterinarios/addVeterinario.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from './layout.jsx'
import AddUser from './users/addUser.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/veterinarios" element={<ListVeterinario />} />
            <Route path="/addVeterinario" element={<AddVeterinario/>} />
            <Route path="/addVeterinario/:id" element={<AddVeterinario/>} />
            <Route path="/addVeterinario/:_id" element={<AddVeterinario/>} />
            <Route path="/veterinario" element={<Veterinario/>} />
            <Route path='/registro' element={<AddUser/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
