import React from 'react';
import Announcement from '../components/Announcement.jsx';
import Navbar from '../components/Navbar.jsx';
import LowerSearchBar from '../components/LowerSearchBar.jsx';
import Slider from '../components/Slider.jsx';
import Categories from '../components/Categories.jsx';
import Products from '../components/Products.jsx';

const Home = () => {
  return(
    <div>
      <Announcement />
      <Navbar />
      <LowerSearchBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
