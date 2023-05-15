class DynamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title");

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: ${this.getAttribute("color")};
                font-size: ${this.getAttribute("font-size")};
                margin: 0;
                margin-bottom: 1rem;
                margin-top: 2rem;
            }
        `;

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('dynamic-title', DynamicTitle);