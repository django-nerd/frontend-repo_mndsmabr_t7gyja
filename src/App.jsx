import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ParallaxBG from './components/ParallaxBG'
import { Features, Pricing as PricingSection, Testimonials } from './components/Sections'

function App(){
  return (
    <div className="min-h-screen bg-[#0b0d12] relative">
      <ParallaxBG/>
      <Navbar/>
      <Hero/>
      <Features/>
      <PricingSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
