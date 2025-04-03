const menu = document.getElementById("openMenu")

function openMenu() {
    var inputValue = document.getElementById("input").value
    if (inputValue == "0801") {
        menu.style.visibility = "visible"
    } else {
        console.log("Ne pravilno." + inputValue)
    }
}