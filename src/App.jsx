import './App.css'
import Navbar from '../src/components/Navbar.jsx'
import Hero from '../src/components/Hero.jsx';
import Feature from "../src/components/Feature.jsx"
import About from '../src/components/About.jsx';
import Footer from "../src/components/Footer.jsx"


function App() {
  return (
    <>
      <div className='container'
      >
        <Navbar />
        <Hero />
        <Feature />
        <About />
        <Footer />
      </div>

    </>
  )
}

export default App
