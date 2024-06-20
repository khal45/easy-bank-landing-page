// for the three dashed lines
const mobileMenu = document.querySelector(".mobile-menu")
const overLay = document.getElementById("overlay")
// for the mobile menu box thingy
const mobileMenuLinks = document.getElementById("mobile-menu-links")
const body = document.body

mobileMenu.addEventListener("click", () => {
    if (mobileMenu.classList.contains("mobile-menu-open")) {
        mobileMenu.classList.remove("mobile-menu-open")
        overLay.classList.remove("overlay-fade-in")
        overLay.classList.add("overlay-fade-out")
        mobileMenuLinks.classList.remove("mobile-menu-fade-in")
        mobileMenuLinks.classList.add("mobile-menu-fade-out")
        body.classList.remove("no-scroll")
    } else {
        mobileMenu.classList.add("mobile-menu-open")
        overLay.classList.remove("overlay-fade-out")
        overLay.classList.add("overlay-fade-in")
        mobileMenuLinks.classList.remove("mobile-menu-fade-out")
        mobileMenuLinks.classList.add("mobile-menu-fade-in")
        body.classList.add("no-scroll")
    }
})