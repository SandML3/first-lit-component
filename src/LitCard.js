import { html, css, LitElement } from 'lit';

export class LitCard extends LitElement {
  static styles = css`
    :host {
      font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    }

    .card {
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;
    }

    .card-header,
    .card-footer {
      padding: 0.75rem 1.25rem;
      background-color: rgba(0, 0, 0, 0.03);
    }

    .card-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .card-footer {
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      text-align: var(--footer-align, left);
    }

    .card-body {
      padding: 1.25rem;
      line-height: 1.5;
    }

    h5 {
      font-size: 1.25rem;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-bottom: 0.75rem;
    }

    ::slotted(p) {
      margin-block-start: 0;
      margin-block-end: 1rem;
    }

    .card-img {
      width: 100%;
      height: 180px;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
    }
  `;

  static properties = {
    // eslint-disable-next-line lit/no-native-attributes
    title: { type: String },
    header: { type: String },
    footer: { type: String },
    img: { type: String },
  };

  constructor() {
    super();
    this.title = 'Card title';
  }

  render() {
    return html`
      <div class="card">
        ${this.header
          ? html`<div class="card-header">${this.header}</div>`
          : ''}
        ${this.img && !this.header
          ? html`<img class="card-img" src=${this.img} alt="header img" />`
          : ''}
        <div class="card-body">
          <h5>${this.title}</h5>
          <slot></slot>
        </div>
        ${this.footer
          ? html`<div class="card-footer">${this.footer}</div>`
          : ''}
      </div>
    `;
  }
}
