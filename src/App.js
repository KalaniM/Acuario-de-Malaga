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
        <body className="App-article">
            <Article/>
            <OtherArticles/>
        </body>
    </div> );
}

export default App;
