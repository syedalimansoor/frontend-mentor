const form = document.querySelector("#signup-reg__form")
const formSubmit = document.querySelector("#signup-reg__submit")
const formFields = document.querySelectorAll(".signup-reg__field")
const formInputs = document.querySelectorAll(".signup-reg__input")
const formErrors = document.querySelectorAll(".signup-reg__error")

function makeErrorMsg(name) {
    return `${name} cannot be empty`
}


for (let i = 0; i < formFields.length; i++) {
    
    let fieldName = formInputs[i].attributes.name.value
    let errorElement = formErrors[i]
    let errorMsg = document.createElement("span")
    errorMsg.innerText = makeErrorMsg(fieldName)

    if (fieldName === "Email Address") {
        errorMsg.innerText = "Looks like this is not an email"
    }
    errorElement.append(errorMsg)

    formInputs[i].addEventListener("input", function () {
        if (!this.validity.valid) {
            formFields[i].classList.add("signup-reg__field--invalid")

            currInput = formFields[i].firstElementChild
            currInput.placeholder = ""
            if (currInput.name === "Email Address") {
                currInput.placeholder = "email@example/com"
            }
        } else {
            formFields[i].classList.remove("signup-reg__field--invalid")
        }

        validateForm()
    })

}

function validateForm() {
    let formElements = Array.from(form.elements, elem => elem.validity.valid)
    if (formElements.every(elem => elem)) {
        formSubmit.disabled = false
    } else {
        formSubmit.disabled = true
    }
}

document.getElementsByTagName("input").value = ""
validateForm()