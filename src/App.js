import React from 'react';
import './App.css';
import Nav from './comp/nav';
import Article from './comp/article';
import NextArticle from './comp/cta';
import OtherArticles from './comp/otherArticles';

function App() {
  return ( <div className="App">
    <header className="App-header">
      <Nav/>
    </header>
    <div className="App-article">
      <Article/>
      <OtherArticles/>
    </div>
    <NextArticle/>
  </div> );
}

export default App;
