let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})
// HAMBERGER
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0"
}
function hideMenu() {
    navLinks.style.right = "-260px"
}
// TAB COME BACK

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back : ("
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

// Share 

