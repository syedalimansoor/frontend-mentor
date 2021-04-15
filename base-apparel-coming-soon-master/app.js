emailInput = document.querySelector(".notify__email")
submitBtn = document.querySelector(".notify__submit")
errorMsg = document.querySelector(".notify__error")


// Email regex
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

// Test form to see if input is present and valid
// Disable/enable the button, and show/hide the error message accordingly
function validateForm() {
    if (!validateEmail(emailInput.value)) {
        submitBtn.disabled = true
        errorMsg.classList.add("notify__error--show")

        // Show different message if field empty / invalid email
        if (!emailInput.value) {
            errorMsg.innerText = "You forgot to enter your email!"
        } else {
            errorMsg.innerText = "Please provide a valid email"
        }
    } else {
        submitBtn.disabled = false
        errorMsg.classList.remove("notify__error--show")
    }
}

// Validate form on input
emailInput.addEventListener("input", validateForm)

// Validate form on hover on button
submitBtn.addEventListener("mouseenter", validateForm)

// Validate form on page load for mobile devices
if ("ontouchstart" in document.documentElement) {
    validateForm()
}

