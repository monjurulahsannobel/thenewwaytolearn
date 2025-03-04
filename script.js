document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

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
        gallery.appendChild(img);
    });

    console.log("Gallery images loaded.");
});
