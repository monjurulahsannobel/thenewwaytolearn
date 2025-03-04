/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: #121212;
    color: white;
    text-align: center;
    overflow-x: hidden;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 50px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-sizing: border-box;
    overflow: hidden;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #0ff;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: #0ff;
    font-size: 18px;
    transition: 0.3s;
}

nav ul li a:hover {
    color: #fff;
}

.menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: #0ff;
}

/* Hero Section */
#hero {
    height: 100vh;
    background: url('images/kids_learning_2.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    color: white;
    position: relative;
}

.hero-content {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 15px;
}

.cta-button {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #0ff;
    color: #121212;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.3s;
}

.cta-button:hover {
    background: #fff;
}

/* Gallery Section */
#gallery {
    padding: 50px;
    background: #1a1a1a;
}

.gallery-container {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.gallery-container img {
    width: 250px;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
}

.gallery-container img:hover {
    transform: scale(1.05);
}

/* Experience Center */
#experience {
    padding: 50px;
    background: #1a1a1a;
}

.experience-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.experience-box {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    max-width: 300px;
}

/* Partners Section */
#partners {
    padding: 50px;
    background: #1a1a1a;
}

.partners-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.partners-container img {
    max-width: 150px;
    border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.9);
        padding: 20px;
    }

    nav ul.active {
        display: flex;
    }

    .gallery-container {
        flex-direction: column;
        align-items: center;
    }
}
