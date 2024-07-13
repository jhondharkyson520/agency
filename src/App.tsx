import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/about"
import Facts from "./pages/facts"
import Features from "./pages/features"
import Hero from "./pages/hero"
import Services from "./pages/services"
import Testimonial01 from "./pages/testimonial01"
import Testimonial02 from "./pages/testimonial02"
import Works from "./pages/works"

function App() {
 

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonial01/>
      <About/>
      <Facts/>
      <Features/>
      <Works/>
      <Testimonial02/>
      <Footer/>            
    </>
  )
}

export default App