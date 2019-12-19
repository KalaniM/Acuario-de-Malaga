import React, { PureComponent } from 'react';
import Article from './comp/article';
import OtherArticles from './comp/otherArticles';

class Redirect extends PureComponent {
  render() {
    return(
      <div>
        <div className="App-article">
          <Article/>
          <OtherArticles/>
        </div>

      </div>
    )
  }
};


export default Redirect
