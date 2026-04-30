document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".shorts-card");

    cards.forEach(card => {
        const video = card.querySelector("video");

        // Hover → play (MUTED ONLY)
        card.addEventListener("mouseenter", () => {
            video.muted = true; // always keep muted
            video.play().catch(err => console.log(err));

            card.classList.add("playing");
        });

        // Leave → pause
        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;

            card.classList.remove("playing");
        });

        // Click → enable sound (SAFE)
        card.addEventListener("click", () => {
            video.muted = false;
            video.play();
        });
    });
});