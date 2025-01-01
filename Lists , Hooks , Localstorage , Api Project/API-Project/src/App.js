import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Singleproduct from './Singleproduct'
import Product from './Product'
import Registration from './Registration'
import Login from './Login'


export default function App() {
  return (
    <div>
      <Router>

        <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Registration></Registration>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/productdetail/:id' element={<Singleproduct></Singleproduct>}></Route>
        </Routes>
      </Router>
    </div>
  )
}