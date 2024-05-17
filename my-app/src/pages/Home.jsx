
import Navbar from '../componants/Navbar';
import React from 'react'
import Hero from '../componants/Hero'
import Hotels from '../componants/Hotels'
import Amenities from '../componants/Amenities'
import Testimonies from '../componants/Testimonies'
import Blogs from '../componants/Blogs'
import Footer from '../componants/Footer'
import PriceTable from '../componants/PriceTable';
import Map from '../componants/Map';

const Home = () => {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Hotels />
    <PriceTable />
    <Amenities />
    <Testimonies />
    <Blogs />
    <Map />
    <Footer />
    </div>
  )
}

export default Home