import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import Header from './header';
import { molette } from '../img';

class Landing extends PureComponent {

  render() {
    return ( <div>
      <Header/>
      <div className="landing">
        <img alt="gif" src={molette}/>
        <div class="content-left">
          <h2>Découvrir</h2>
          <h2>Aimer</h2>
          <h2>Protéger</h2 >
        </div>
        <div class="content-right">
          <h2>"Qu'est ce que le Mola Mola ?"</h2>
          <Link class="button" to="/redirect">Découvrir l'article</Link>
        </div>
      </div>

    </div> )
  }
}
export default Landing;
