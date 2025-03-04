document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const partners = document.getElementById("partners");

    // Sample images (Replace with actual image paths)
    const galleryImages = [
        "images/kids_learning_1.jpg",
        "images/kids_learning_2.jpg",
        "images/kids_learning_3.jpg"
    ];

    const partnerLogos = [
        "images/western_panthers_logo.svg",
        "images/hamilton_heights_logo.jpg"
    ];

    galleryImages.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Kids Learning";
        gallery.appendChild(img);
    });

    partnerLogos.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Partner School";
        partners.appendChild(img);
    });
});
