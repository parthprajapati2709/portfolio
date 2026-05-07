// =========================
// STICKY NAVBAR
// =========================

window.addEventListener("scroll", function(){

    let navbar =
    document.getElementById("navbar");

    navbar.classList.toggle(
        "sticky",
        window.scrollY > 50
    );

});



// =========================
// TYPING ANIMATION
// =========================

var typed = new Typed(".typing", {

    strings: [

        "Full Stack Developer",

        "PHP Laravel Developer",

        "React Developer",

        "Backend Developer"

    ],

    typeSpeed:80,

    backSpeed:50,

    loop:true

});