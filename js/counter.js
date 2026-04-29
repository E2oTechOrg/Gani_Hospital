function initCounter() {
    const counters = document.querySelectorAll(".counter");

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const speed = 150;
        const increment = target / speed;

        const updateCount = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                counter.innerText = "0"; // 🔥 reset
                startCounting(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ⏳ wait until everything is loaded
document.addEventListener("DOMContentLoaded", () => {
    initCounter();
});


const slides = [
    {
        image: "images/banner/ban1.jpg",
        subtitle: "Total Health Care Solution",
        title: "Your Most Trusted Health Partner",
        desc: "We provide the best medical care with experienced doctors."
    },
    {
        image: "images/banner/ban1.jpg",
        subtitle: "Expert Doctors",
        title: "Qualified Medical Professionals",
        desc: "Our doctors are highly skilled and experienced."
    },
    {
        image: "images/banner/ban2.webp",
        subtitle: "Advanced Equipment",
        title: "Modern Medical Technology",
        desc: "We use latest equipment for accurate diagnosis."
    },
    {
        image: "images/service/service-6.jpg",
        subtitle: "24/7 Emergency",
        title: "Always Ready to Help",
        desc: "Emergency services available anytime, anywhere."
    }
];

let index = 0;

const bg = document.querySelector(".banner-bg");
const banner = document.getElementById("banner");
const subtitle = document.getElementById("subtitle");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

function changeSlide() {
    const slide = slides[index];

    // fade out content
    banner.classList.remove("show-text");

    setTimeout(() => {

        // change background smoothly
        bg.style.opacity = 0;

        setTimeout(() => {
            bg.style.backgroundImage = `url(${slide.image})`;
            bg.style.opacity = 1;
        }, 300);

        // update text
        subtitle.innerText = slide.subtitle;
        title.innerText = slide.title;
        desc.innerText = slide.desc;

        // fade in content
        banner.classList.add("show-text");

    }, 300);

    index = (index + 1) % slides.length;
}

// init
changeSlide();
setInterval(changeSlide, 5000);