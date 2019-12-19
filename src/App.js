import React from 'react';
import './App.css';
import Nav from './comp/nav';
import Article from './comp/article';
import OtherArticles from './comp/otherArticles';

function App() {
  return ( <div className="App">
    <header className="App-header">
      <Nav/>
    </header>
    <div className="App-homepage"></div>
    <div className="App-article">
      <Article/>
      <OtherArticles/>
    </div>
  </div> );
}

export default App;
