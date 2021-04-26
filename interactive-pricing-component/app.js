slider = document.querySelector(".js-card-slider")
toggle = document.querySelector(".js-card-toggle")
priceElem = document.querySelector(".js-card-price")
pageviewsElem = document.querySelector(".js-card-pageviews")

pageviews = ["10K", "50K", "100K", "500K", "1M"]
prices = [8, 12, 16, 24, 36]

function getPrices() {
    if (toggle.checked) {
        return prices.map(p => p * 0.75)
    } else {
        return prices
    }
}

function getPrice() {
    return getPrices()[parseInt(slider.value)-1]
}

function getPageviews() {
    return pageviews[parseInt(slider.value) - 1]
}

function updateElems() {
    priceElem.innerText = `$${getPrice()}.00`
    pageviewsElem.innerText = getPageviews()
}

slider.addEventListener("input", updateElems)
toggle.addEventListener("input", updateElems)

// Make labels clickable

beforeLabel = document.querySelector(".js-toggle-label-before")
afterLabel = document.querySelector(".js-toggle-label-after")

beforeLabel.addEventListener("click", function () {
    if (toggle.checked) {
        toggle.checked = false
        updateElems()
    }
})
afterLabel.addEventListener("click", function () {
    if (!toggle.checked) {
        toggle.checked = true
        updateElems()
    }
})