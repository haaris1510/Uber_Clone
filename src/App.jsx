
import DownloadApp from '../../09_Project1/src/components/DownloadApp'
import './App.css'
import Activity from './components/Activity'
import Cards from './components/Cards'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MapSection from './components/MapSection'
import MultipleCards from './components/MultipleCards'
import Navbar from './components/Navbar'
import SuggestionsSection from './components/SuggestionsSection'

function App() {
  

  return (
    <>
     <Navbar />
     {/* <HeroSection /> */}
     <MapSection />
     <SuggestionsSection />
     <Activity />
     {/* <Cards /> */}
     <MultipleCards />
     <DownloadApp />
     <Footer />
    </>
  )
}

export default App
