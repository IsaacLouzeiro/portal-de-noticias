class CardHighlights extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card-highlights");

        const autor = document.createElement("span");
        autor.textContent = (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        componentRoot.appendChild(autor);
        componentRoot.appendChild(linkTitle);

        return componentRoot;
    }

    styles() {
        const styles = document.createElement("style");
        styles.textContent = `
            .card-highlights {
                display: flex;
                flex-direction: column;
                padding: .7em 0;
            }
            
            .card-highlights span {
                font-weight: 500;
                font-size: .9em;
            }
            
            .card-highlights > a {
                margin-top: .3em;
                font-size: 1em;
                font-weight: bold;
                text-decoration: none;
                color: #000;
            }
        `

        return styles;
    }
}

customElements.define("card-highlights", CardHighlights);