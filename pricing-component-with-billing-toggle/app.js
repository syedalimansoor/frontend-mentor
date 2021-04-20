const toggle = document.querySelector(".js-toggle-checkbox")
const priceElems = document.querySelectorAll(".js-card-price")

const annualPrices = [199.99, 249.99, 399.99]
const monthlyPrices = [19.99, 24.99, 39.99]

const getPrices = () => {
    if (toggle.checked) {
        return monthlyPrices
    } else {
        return annualPrices
    }
}

const updateElems = () => {
    newPrices = getPrices()

    for (let p = 0; p < priceElems.length; p++) {
        priceElems[p].textContent =  newPrices[p]
    } 
}


updateElems()
toggle.addEventListener("click", updateElems)

// Toggle switch by clicking on labels
const annually = document.querySelector(".js-annually")
const monthly = document.querySelector(".js-monthly")

annually.addEventListener("click", () => {
    if (toggle.checked) {
        toggle.checked = false
    }
    updateElems()
})
monthly.addEventListener("click", ()=> {
    if (!toggle.checked) {
        toggle.checked = true
    }
    updateElems()
})