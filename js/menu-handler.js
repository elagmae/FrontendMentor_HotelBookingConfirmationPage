function OpenMenu()
{
    const menu = document.getElementById("aside_pc");
    const header = document.getElementById("aside_mobile");

    menu.style.display = "flex";
    menu.style.position = "absolute";
    header.style.display = "none";

    document.body.style.overflow = 'hidden';
}

function CloseMenu()
{
    const menu = document.getElementById("aside_pc");
    const header = document.getElementById("aside_mobile");

    menu.style.display = "none";
    menu.style.position = "relative";
    header.style.display = "flex";

    document.body.style.overflow = 'scroll';
}