import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile'
import {BrowserRouter, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main>
            <div className="container main-row">
                <Sidebar />
                <Route path="/" exact component={Profile} />
            </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
