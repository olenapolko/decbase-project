const presenceWrapper = document.querySelector(".presence");
const body = document.querySelector("body");
const presenceBtn = document.querySelector(".presence__btn");

const timeToOpenModal = 60000;
const timeToClosePage = 10000;

let isBtnClicked = false;
let closeTimer;

function openModal() {
    presenceWrapper.style.display = "block";
}

function closeModal() {
    presenceWrapper.style.display = "none";
}

function resetTimer() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
        openModal();
        setTimeout(() => {
            closeModalAndPage();
        }, timeToClosePage);
    }, timeToOpenModal);
}

function closeModalAndPage() {
    if (!isBtnClicked) {
        window.close();
        alert("Window was closed");
        console.log("Window was closed");
        closeModal();
    }
    isBtnClicked = false;
}

presenceBtn.addEventListener("click", () => {
    closeModal();
    isBtnClicked = true;
});

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);

resetTimer();
