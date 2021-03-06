import React, { PureComponent } from "react";
import NextArticle from './cta';

class OtherArticles extends PureComponent {
  render() {
    return ( <div className="otherArticles">
      <aside>
        <h4>Découverte</h4>
        <h5>Le Sunfish</h5>
        <hr/>
      </aside>
      <aside>
        <h4>Explorer</h4>
        <h5>La saison des baleines à Malaga</h5>
      </aside>
      <aside>
        <h4>Enquête</h4>
        <h5>La migration des petites crevettes bleues</h5>
      </aside>
      <NextArticle/>
    </div> );
  }
}
export default OtherArticles;
