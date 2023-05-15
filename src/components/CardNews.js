class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const dataPublication = document.createElement("span");
        dataPublication.textContent = this.getAttribute("dataPublication");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous") + " · ";

        autor.appendChild(dataPublication);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/img/default_image.jpg";
        newsImage.alt = "Foto da Notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const styles = document.createElement("style");
        styles.textContent = `
            .card {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 2em;
                padding-bottom: 2em;
                border-bottom: 1px solid #ddd;
            }
            
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .card-left span {
                font-weight: 500;
                font-size: .9em;
            }
            
            .card-left > a {
                margin-top: .3em;
                font-size: 1.3em;
                font-weight: bold;
                text-decoration: none;
                color: #000;
            }
            
            .card-left p {
                color: rgb(101, 101, 101);
                font-size: 1em;
            }
            
            .card-right img {
                width: 10em;
                height: 10em;
                margin-left: .5em;
            }

            @media screen and (max-width: 727px) {
                .card-left span {
                    font-weight: 400;
                    font-size: .9em;
                }
                
                .card-left > a {
                    font-size: 1.1em;
                }
                
                .card-left p {
                    font-size: 1em;
                    display: block;
                    white-space: nowrap;
                    max-width: 18em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .card-right img {
                    width: 7em;
                    height:7em;
                }
            }
        `

        return styles;
    }
}

customElements.define("card-news", CardNews);