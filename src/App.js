import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ContactData from './components/ContactData/ContactData';
import Header from './components/Header';



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Intro />
     <About />
     <ContactData />
    </div>
  );
}

export default App;
