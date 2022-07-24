import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import ImageCarousel from '../components/ImageCarousel'
import Explore from '../components/Explore'
function Home() {
  return (
    <>
          <Navbar />
          <Heading/>
          <ImageCarousel />
          <Explore/>
    </>
   
  )
}

export default Home