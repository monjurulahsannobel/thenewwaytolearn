document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery-container");
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    // Add images dynamically
    const galleryImages = [
        "images/kids_learning_1.jpg",
        "images/kids_learning_2.jpg",
        "images/kids_learning_3.jpg",
        "images/kids_learning_4.jpg",
        "images/kids_learning_5.jpeg",
        "images/kids_learning_6.jpg"
    ];

    galleryImages.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Kids Learning";
        img.classList.add("gallery-img");
        img.addEventListener("click", () => openLightbox(imgSrc));
        gallery.appendChild(img);
    });

    function openLightbox(src) {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `<div class='lightbox-content'><img src='${src}'><span class='close'>&times;</span></div>`;
        document.body.appendChild(lightbox);
        document.querySelector(".close").addEventListener("click", () => lightbox.remove());
    }

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
