

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';
import About from './pages/About';
//import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Feedback from './pages/feedback';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/feedback" element={<Feedback />} /> 
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
