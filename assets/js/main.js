//menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

//hide menu
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLink.forEach((el) => el.addEventListener("click", linkAction));

//header
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50 ? header.classList.add("scroll-header") : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

//swiper
const swiperWork = new Swiper(".work__swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
        el: ".work__data .swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".work__data .swiper-button-next",
        prevEl: ".work__data .swiper-button-prev",
    },
});
