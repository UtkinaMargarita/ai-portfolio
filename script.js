document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img, index) => {
        img.style.animation = `fadeIn 1s ease-out ${index * 0.2 + 0.5}s forwards`;
    });
});