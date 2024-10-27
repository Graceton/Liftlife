// Scroll functionality to keep the navbar at the top
window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};
