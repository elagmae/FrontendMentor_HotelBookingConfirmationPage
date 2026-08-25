class NavItem extends HTMLElement
{
   constructor()
   {
        super(); // item initialization.

        const icon = this.getAttribute("icon");
        const title = this.getAttribute("title");
        const alerts = this.getAttribute("alerts") || 0;

        // our custom code...
        this.innerHTML = 
        `
            <img src=${icon}>
            <p>${title}</p>

            ${alerts != 0  ? 
            `
                <p id="alert">${alerts}</p>
            ` 
            : ""}
        `;
   }
}

customElements.define('nav-item', NavItem);