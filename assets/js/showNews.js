const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = index * 0.5;
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add("news__item_visible");
        } else {
            entry.target.style.transitionDelay = "0s";
            entry.target.classList.remove("news__item_visible");
        }
    });
},);

const hiddenElements = document.querySelectorAll(".news__item_hidden");
hiddenElements.forEach((elem) => observer.observe(elem));
