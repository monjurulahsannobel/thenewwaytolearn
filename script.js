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

    // Google Map Integration
    window.initMap = function () {
        const albany = { lat: 42.6526, lng: -73.7562 };
        const nyc = { lat: 40.7128, lng: -74.0060 };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 6,
            center: albany
        });

        new google.maps.Marker({ position: albany, map: map, title: "Albany Learning Center" });
        new google.maps.Marker({ position: nyc, map: map, title: "NYC Learning Center" });
    };
});
