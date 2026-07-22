/* Mobile Menu */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if(menu && nav){
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


/* Lightbox Gallery */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if(lightbox && lightboxImg && closeBtn){

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = image.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", e => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}


/* Scroll Animation */

const hiddenElements = document.querySelectorAll(
".feature-card, .program-card, .gallery-item, .testimonial-card, .about-box, .contact-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
