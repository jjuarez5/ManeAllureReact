import Navbar from "./Navbar";
import Splash from "./Splash";
import About from "./About";
import Booking from "./Booking";
import Gallery from "./Gallery";
import LiveAssistant from "./LiveAssistant";
import LocationInfo from "./LocationInfo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App bg-black font-libre">
      <Navbar />
      <Splash />
      <About />
      <Booking />
      <Gallery />
      <LiveAssistant />
      <LocationInfo />
      <Footer />
    </div>
  );
}

export default App;
