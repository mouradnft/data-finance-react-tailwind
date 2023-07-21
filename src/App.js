import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Etude from './components/Etude';
import Study from './components/Study';
import Opportunity from './components/opportunity';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Etude />
      <Study />
      <Opportunity />
      <Footer />
    </>
  );
}

export default App;
