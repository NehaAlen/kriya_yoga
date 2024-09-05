import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Component/Header';
import Teaching from "./Component/Teaching/Teaching";
import Home from "./Component/Home";
import SiddhanathSuryaYoga from "./Component/SiddhanathSuryaYoga";
import KundaliniKriyaYoga from "./Component/Teaching/KundaliniKriyaYoga";
import SiddhanathHamsaYoga from "./Component/Teaching/SiddhanathHamsaYoga";
import EarthPeaceMeditation from "./Component/Teaching/EarthPeaceMeditation";
import Yoga from "./Component/Teaching/Yoga";
import Event from "./Component/Event";
import Ayurveda from "./Component/Ayurveda";
import Footer from "./Component/Footer";
import Our_Community from "./Component/Our_Community";
import Yogiraj_siddhanath from "./Component/Yogiraj_siddhanath";



function App() {
  return (
    <div className="App">
  
      <Router>
      <Header/>
        {/* <Banner/> */}
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Teaching" element={<Teaching />} />
          <Route exact path="/KundaliniKriyaYoga" element={<KundaliniKriyaYoga />} />
          <Route exact path="/SiddhanathHamsaYoga" element={<SiddhanathHamsaYoga />} />
          <Route exact path="/SiddhanathSuryaYoga" element={<SiddhanathSuryaYoga />} />
          <Route exact path="/EarthPeaceMeditation" element={<EarthPeaceMeditation />} />
          <Route exact path="/Yoga" element={<Yoga />} />
          <Route exact path="/Event" element={<Event />} />
          <Route exact path="/Ayurveda" element={<Ayurveda />} />
          <Route exact path="/Our_Community" element={<Our_Community />} />
          <Route exact path="/Yogiraj_siddhanath" element={<Yogiraj_siddhanath />} />
          

          
        </Routes>
        <Footer/>
      </Router>
      
      
      
    </div>
  );
}

export default App;
