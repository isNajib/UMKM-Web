window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        // Ubah 50 ke nilai scroll tertentu jika diperlukan
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

AOS.init();

let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});
