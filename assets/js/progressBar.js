const progressBar = document.querySelector(".header__progress-bar");
progressBar.style.width = "0%";

function handleScroll() {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
}

let isScrolling = false;

function throttleScroll() {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
    }
}

document.addEventListener("scroll", throttleScroll);
