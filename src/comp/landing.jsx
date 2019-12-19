import React, { PureComponent } from 'react';
import { molette } from '../img';



class Landing extends PureComponent {
  render() {
    return ( <div className="landing">
      <img alt="gif" src={molette}/>
      <div class="content-left">
        <h2>Découvrir</h2>
        <h2>Aimer</h2>
        <h2>Protéger</h2>
      </div>
      <div class="content-right">
        <h2>"Qu'est ce que le Mola Mola ?"</h2>
        <button class="button" href="./redirect.jsx">Prochain article</button>
      </div>
    </div>
    )
  }
};

export default Landing
