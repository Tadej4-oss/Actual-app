const menuBtn = document.getElementById("dropdown");
const sidemenu = document.getElementById("sidemenu");

menuBtn.addEventListener("click", ()=> {
    sidemenu.classList.toggle("open");
})