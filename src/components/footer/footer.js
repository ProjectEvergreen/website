import { html, render } from 'lit-html';
import css from './footer.css';

class Footer extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <footer>     
        <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">github</a> |
        <a href="https://twitter.com/PrjEvergreen" target="_blank" rel="noopener">twitter</a> 

        <br/>

        <a href="https://project-evergreen.thegreenhouse.io">&copy; Project Evergreen 2018</a>
      </footer>
    `;
  }
}

customElements.define('pe-footer', Footer);