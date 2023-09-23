import React from 'react'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Footer from './Components/Footer'
import Header from './Components/Header'
import CTA from './Components/CTA'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Header/>
        <Stats/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default HomePage