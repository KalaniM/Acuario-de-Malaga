import React from 'react';
import './App.css';
import Nav from './comp/nav';
import Article from './comp/article';

function App() {
    return ( <div className="App">
        <header className="App-header">
            <Nav/>
            <article>
                <Article/>
            </article>
        </header>
    </div> );
}

export default App;
