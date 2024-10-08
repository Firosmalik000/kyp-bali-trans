import { Routes, Route } from 'react-router-dom';

import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './pages/Gallery';
import useScrollToTop from './hooks/useScrollToTop';
import WaButton from './components/WaButton';
import Packages from './pages/Packages';
import PackageDetail from './components/PackageDetail';
import Navbar from './components/fragments/Navbar';

function App() {
  useScrollToTop();
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/package/:id" element={<PackageDetail />} />
      </Routes>
      <WaButton />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
