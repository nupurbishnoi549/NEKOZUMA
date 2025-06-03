import React from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Team from './components/Team'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CustomSlider from './components/CustomSlider'

const App = () => {
  return (
    <>
      <Hero />
     <CustomSlider/>
      <Story />
      <Team />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
