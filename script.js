document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const partners = document.getElementById("partners");

    // Add more images dynamically (Replace with your actual image paths)
    const galleryImages = [
        "images/kids_learning_1.jpg",
        "images/kids_learning_2.jpg",
        "images/kids_learning_3.jpg",
        "images/kids_learning_4.jpg",  // New Image
        "images/kids_learning_5.jpg",  // New Image
        "images/kids_learning_6.jpg"   // New Image
    ];

    const partnerLogos = [
        "images/western_panthers_logo.jpg",
        "images/hamilton_heights_logo.jpg"
    ];

    // Create the moving slideshow for the gallery
    let imgIndex = 0;
    const imgElement = document.createElement("img");
    imgElement.src = galleryImages[imgIndex];
    imgElement.alt = "Kids Learning";
    imgElement.classList.add("slideshow");
    gallery.appendChild(imgElement);

    function changeImage() {
        imgIndex = (imgIndex + 1) % galleryImages.length;
        imgElement.src = galleryImages[imgIndex];
    }

    // Change image every 3 seconds
    setInterval(changeImage, 3000);

    // Display partner logos
    partnerLogos.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Partner School";
        partners.appendChild(img);
    });
});
