const menuBars = document.getElementById("menu-bars");
const menuCross = document.getElementById("menu-cross");
const navLinks = document.querySelector(".nav__links");

menuBars.addEventListener("click", () => {
    navLinks.classList.add("active"); 
    // console.log('show menu');
    menuBars.style.display = "none";
    menuCross.style.display = "inline";
});

menuCross.addEventListener("click", () => {
    navLinks.classList.remove("active"); // Hide menu
    menuBars.style.display = "inline";
    menuCross.style.display = "none";
    // console.log('hide menu');
    
});
