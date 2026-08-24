class InfoCard extends HTMLElement
{
   constructor()
   {
        super(); // item initialization.

        const index = [...this.parentElement.children].indexOf(this) + 1;
        const number = String(index).padStart(2, "0");

        const color = this.getAttribute("color") || "#000000";
        const icon = this.getAttribute("icon");
        const title = this.getAttribute("title") || "Title";
        const subtitle = this.getAttribute("subtitle") || "Subtitle";
        const legend = this.getAttribute("legend") || "Legend";
        const description = this.getAttribute("description") || "Description";

        // our custom code...
        this.innerHTML = 
        `
            <div id="card_header">
                <img src=${icon} style="background-color:${color}">
                <span style="color:${color}">${title}</span>
                <p id="card_number" style="color:${color}">${number}<p>
            </div>

            <div id="card_base">
                <h4>${subtitle}</h4>
                <p class="typewriter">${legend}</p>
                <p>${description}</p>
            </div>
        `;
   }
}

customElements.define('info-card', InfoCard);