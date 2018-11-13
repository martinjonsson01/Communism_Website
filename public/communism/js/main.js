var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var navBar = document.getElementById("nav");
    var currentScrollPos = window.pageYOffset;

    /* When the user has scrolled to the top, restyle the navbar. */
    if (currentScrollPos == 0) {
        navBar.classList.add("top");
    } else {
        navBar.classList.remove("top");
    }

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar. */
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").classList.remove("hide");
    } else {
        document.getElementById("nav").classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon. */
function toggleMenu() {
    var menu = document.getElementById("navbar-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}