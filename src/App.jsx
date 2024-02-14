import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import LandingPage from "./components/pages/LandingPage"
import Project from "./components/pages/Project"
import Experience from "./components/pages/Experience"

import './App.css'

function App() {


  return (
    <Suspense>
      <Router>
        <>
          <div className='page'>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
            <Footer />
          </div>
        </>
      </Router>

    </Suspense>
  )
}

export default App
