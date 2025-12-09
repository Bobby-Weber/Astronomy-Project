
document.addEventListener("DOMContentLoaded", () => {
    const starfield = document.getElementById("starfield");
    const stars = [];
    for (let i = 0; i < 600; i++) {
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
    const images = document.getElementsByClassName("planetimg");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", () => {
            images[i].closest('div').querySelector('.tables').removeAttribute("hidden");
        });
        images[i].addEventListener("mouseout", () => {
            images[i].closest('div').querySelector('.tables').setAttribute("hidden", "");
        });
    }

    // Auto-hide planet tables when they scroll out of view
    const tables = document.querySelectorAll(".tables");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.setAttribute("hidden", "");
            }
        });
    }, {
        threshold: 0
    });

    tables.forEach(table => observer.observe(table));

    
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
