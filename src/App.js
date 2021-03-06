import React from 'react'
import Customers from './components/customers'
import { Routes, Route, Link } from 'react-router-dom'
import CustomerInfo from './components/CustomerInfo'
import AddCustomer from './components/AddCustomer'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

import './App.css'

function App() {
    // The Returned Doms
    return (
        <div className="App bg-main font-inter">
            {/* <h1 className="text-2xl text-main block border-b-2">
                Welcome From The Appjs File
            </h1> */}
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/:id" element={<CustomerInfo />} />
                <Route path="/add-customer" element={<AddCustomer />} />
            </Routes>
        </div>
    )
}

export default App
