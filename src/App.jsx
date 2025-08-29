import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hobbies from './components/hobbies'
import Interests from './components/Interests'

function App() {
  const [activeSection, setActiveSection] = useState('projects')

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'hobbies':
        return <Hobbies />
      case 'interests':
        return <Interests />
      case 'contact':
        return <Contact />
      default:
        return <Projects />
    }
  }

  return (
    <div className="app">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <footer className="footer">
        <p>© 2024 Portfolio Showcase - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App