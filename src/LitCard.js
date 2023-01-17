import { html, css, LitElement } from 'lit';

export class LitCard extends LitElement {
  static styles = css``;

  static properties = {
    // eslint-disable-next-line lit/no-native-attributes
    title: { type: String },
    header: { type: String },
    footer: { type: String },
  };

  constructor() {
    super();
    this.title = 'Card title';
  }

  render() {
    return html`
      <h1>
        <div class="card">
          ${this.header
            ? html`<div class="card-header">${this.header}</div>`
            : ''}
          <div class="card-body">
            <h5>${this.title}</h5>
            <slot></slot>
          </div>
        </div>
        ${this.footer
          ? html`<div class="card-footer">${this.footer}</div>`
          : ''}
      </h1>
    `;
  }
}
