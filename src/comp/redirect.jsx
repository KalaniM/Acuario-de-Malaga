import React, { PureComponent } from 'react';
import Article from './article';
import OtherArticles from './otherArticles';
import Header from './header';

class Redirect extends PureComponent {
  render() {
    return ( <div>
      <Header/>
      <div className="App-article">
        <Article/>
        <OtherArticles/>
      </div>

    </div> )
  }
};

export default Redirect
