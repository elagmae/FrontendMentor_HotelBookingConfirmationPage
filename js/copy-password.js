function CopyPassword()
{
    // Get the text field
    var copyText = document.getElementById("copy");
    navigator.clipboard.writeText("soleil-2026")
    .then(() => 
    {
        alert("Copied!");
    })
    .catch(() => 
    {
        alert("Failed to copy.");
    });
}