import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open Movie Database Searcher</h1>
        <Search/>
      </header>
    </div>
  );
}

export default App;
