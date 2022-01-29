import React from 'react';
import Announcement from '../components/Announcement.jsx';
import Navbar from '../components/Navbar.jsx';
import Slider from '../components/Slider.jsx';
import Categories from '../components/Categories.jsx';

const Home = () => {
  return(
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
