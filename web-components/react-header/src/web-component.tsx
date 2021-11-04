import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";

class HeaderWebComponent extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        const reactRoot = document.createElement('div');
        const styleTag = document.createElement('link');
        styleTag.rel = 'stylesheet';
        styleTag.href = 'header-web-component.css';

        shadowRoot.appendChild(styleTag);
        shadowRoot.appendChild(reactRoot);

        ReactDOM.render(<Header />, reactRoot);
    }
}

customElements.define('react-header', HeaderWebComponent);
