import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Remove default Vite styles
    document.body.style.margin = '0'
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
