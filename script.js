
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


    // Ruler
    window.addEventListener("load", () => {
        const ruler = document.getElementById("ruler");
        ruler.style.height = document.body.scrollHeight + "px";

        const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const auPx = remPx * 580;

        //const auPx = window.innerHeight * 10;
        const tickInterval = 0.01;
        const tickPx = auPx * tickInterval;

        const numTicks = Math.floor(document.body.scrollHeight / tickPx);

        for (let i = 0; i <= numTicks; i++) {
            const tick = document.createElement("div");
            tick.classList.add("tick");

            tick.style.top = (i * tickPx) + "px";
            tick.textContent = (i * tickInterval).toFixed(2) + " AU";

            ruler.appendChild(tick);
        }
    })

});
