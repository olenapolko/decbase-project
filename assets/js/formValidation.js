const form = document.querySelector(".contact__form");
const nameInput = document.querySelector("#name-input");
const surnameInput = document.querySelector("#surname-input");
const emailInput = document.querySelector("#email-input");
const nameError = document.querySelector("#name-error");
const surnameError = document.querySelector("#surname-error");
const emailError = document.querySelector("#email-error");
const discountName = "Sigma";
const confetti = document.querySelector(".confetti-container");
const congrats = document.querySelector(".congrats");
const congratsText = document.querySelector(".congrats__text");
const today = new Date();

const namePattern = /^[A-Z][a-z]*$/;
const emailPattern = /^\S+@\S+\.\S+$/;

function validateField(field, pattern, errorElement) {
    const value = field.value.trim();
    const isValid = pattern.test(value);

    field.style.outline = isValid ? "1px solid #ced4da" : "1px solid #a70c0c";
    errorElement.style.opacity = isValid ? "0" : "1";

    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameIsValid = validateField(nameInput, namePattern, nameError);
    const surnameIsValid = validateField(
        surnameInput,
        namePattern,
        surnameError
    );
    const emailIsValid = validateField(emailInput, emailPattern, emailError);

    const formIsValid = nameIsValid && surnameIsValid && emailIsValid;

    if (formIsValid) {
        const name = nameInput.value.trim();
        const surname = surnameInput.value.trim();
        const email = emailInput.value.trim();

        localStorage.setItem(
            "userInfo",
            JSON.stringify({ name, surname, email })
        );

        if (name === discountName) {
            congratsText.textContent = `Today, on ${today.toLocaleDateString(
                "uk-UA"
            )} users with the name ${name} get a 120% discount on their order!`;

            confetti.style.display = "block";
            congrats.classList.add("grid");

            setTimeout(() => {
                confetti.style.display = "none";
                congrats.classList.remove("grid");
            }, 7000);
        }
    }
});

nameInput.addEventListener("input", () => {
    nameInput.style.outline = "1px solid #37806b";
    nameError.style.opacity = "0";
});

surnameInput.addEventListener("input", () => {
    surnameInput.style.outline = "1px solid #37806b";
    surnameError.style.opacity = "0";
});

emailInput.addEventListener("input", () => {
    emailInput.style.outline = "1px solid #37806b";
    emailError.style.opacity = "0";
});
