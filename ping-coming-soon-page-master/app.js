const emailInput = document.querySelector("#email")
const submitBtn = document.querySelector(".notify__submit")
const errorMsg = document.querySelector(".notify__error")

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkValidity() {
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("notify__email--error")
        submitBtn.disabled = true
        errorMsg.classList.add("notify__error--error")

        if (!emailInput.value) {
            errorMsg.innerText = "Whoops! It looks like you forgot to add your email"
        } else {
            errorMsg.innerText = "Please provide a valid email address"
        }
    } else {
        emailInput.classList.remove("notify__email--error")
        submitBtn.disabled = false
        errorMsg.classList.remove("notify__error--error")
    }
}

emailInput.addEventListener("input", checkValidity)
submitBtn.addEventListener("mouseenter", checkValidity)