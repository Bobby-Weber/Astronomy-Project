
document.addEventListener("DOMContentLoaded", () => {
    const starfield = document.getElementById("starfield");
    const stars = [];
    for (let i = 0; i < 500; i++) {
        const star = document.createElement("div");

        star.classList.add("star");
        star.style.width = Math.random() * 2 + 1 + "px";
        star.style.height = Math.random() * 2 + 1 + "px";
        star.style.bottom = Math.random() * 100 + "vh";
        star.style.right = Math.random() * 100 + "vw";

        starfield.appendChild(star);
        stars.push(star);
    }

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        for (let i in stars) {
            const depth = (i % 5) + 1;
            stars[i].style.transform = `translateY(${scrollY / depth * 0.001}px)`;
        }
    })

    // Click planet
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", () => {
            images[i].closest('div').querySelector('.tables').toggleAttribute("hidden");
        });
    }
});
