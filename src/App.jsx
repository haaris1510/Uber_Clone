import "./App.css";
import Activity from "./components/Activity";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import MultipleCards from "./components/MultipleCards";
import Navbar from "./components/Navbar";
import SuggestionsSection from "./components/SuggestionsSection";
import DownloadedApp from "./components/DownloadedApp";

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

      <DownloadedApp />
      <Footer />
    </>
  );
}

export default App;
