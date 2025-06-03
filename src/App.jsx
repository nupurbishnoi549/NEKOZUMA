import React from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Team from './components/Team'
import Slider from './components/Slider'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <>
      <Hero />
      <Slider/>
      <Story />
      <Team />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
