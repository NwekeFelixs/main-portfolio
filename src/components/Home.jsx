import React from 'react'
import '../components/css/style.css';
import Header from './fragments/Header';
import Hero from './fragments/Hero';
import StatsSection from './fragments/StatSection';
import AboutSection from './fragments/About';
import SkillsSection from './fragments/SkillsSection';
import Tools from './fragments/Tools';
import Portfolio from './fragments/Portfolio';
import Contact from './fragments/Contact';
import Footer from './fragments/Footer';


function Home() {
  return (
    <div>
       <Header/>
       <main>
          <article>
              <Hero/>
              <StatsSection/>
              <AboutSection/>
              <SkillsSection/>
              <Tools/>
              <Portfolio/>
              <Contact/>
          </article>
       </main>
       <Footer/>
    </div>
  )
}

export default Home
