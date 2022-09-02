import "./App.css";
import Carousel from "./components/Carousel";
import OK from "./components/OK";
import SwiperCarousel from "./components/SwiperCarousel";
import AppointmentPage from "./pages/appointmentPage";
import Footer from "./pages/footer";
import Solutions from "./pages/hassel-free-solution";
import HomePage from "./pages/home-page";
import NavigationBar from "./components/Navbar/navigation-bar";
import AboutUs from "./pages/aboutus";
import Services from "./pages/services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          {/* <Route path="/" element={}></Route> */}
          {/* <Route path="/appointment" element={<AppointmentPage />}></Route> */}
        </Routes>
      </Router>
      <AboutUs />
      {/* <HomePage /> */}

      <Solutions />
      <Services />
      <SwiperCarousel/>

      <Footer/>
      {/* <OK/> */}
    </div>
  );
}

export default App;
