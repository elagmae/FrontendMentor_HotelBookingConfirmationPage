function fitCards()
{
    const cards = document.querySelectorAll("#host_card, #receipt_card");

    cards.forEach(card =>
    {
        card.style.transform = "scale(1)";

        const rect = card.getBoundingClientRect();

        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;

        const scale = Math.min(scaleX, scaleY, 1);

        card.style.transform = `scale(${scale})`;
    });
}

window.addEventListener("resize", fitCards);
fitCards();