function CopyPassword()
{
    // Get the text field
    var copyText = document.getElementById("copy");
    navigator.clipboard.writeText("soleil-2026");

    // Alert the copied text
    alert("Copied the text: soleil-2026");
}