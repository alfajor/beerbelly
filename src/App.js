import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';

function App() {
  return (
    <div className="app">
      <Header />
        <Search />
      <Footer />
    </div>
  );
}

export default App;
