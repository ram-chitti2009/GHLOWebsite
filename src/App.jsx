import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import OurInit from './OurInit/ourInit';
import HomePage from './HomePage/HomePage';
import Footer from './Components/Footer';
import OurTeam from './OurTeam/ourteam';
import AboutUs from './About Us/aboutUs';
import ChapterMap from './Chapter/Chapter';
import Donate from './Donate/Donate';
import Blog from './Blog/blog';
function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen px-4 md:px-8 lg:px-16 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-initiatives" element={<OurInit />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/start-chapter" element={<ChapterMap />} />
            <Route path="/donate" element={<Donate />} />
            <Route path = "/blog" element = {<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;