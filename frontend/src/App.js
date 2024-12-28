import React from 'react';
import Header from './components/Header';
import WatchShowcase from './components/WatchShowcase';
import Features from './components/Features';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <WatchShowcase />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
