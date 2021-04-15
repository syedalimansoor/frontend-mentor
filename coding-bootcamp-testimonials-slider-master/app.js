const images = ["images/image-tanya.jpg", "images/image-john.jpg"]
const names = ["Tanya Sinclair", "John Tarkpor"]
const designations = ["UX Engineer", "Junior Front-end Developer"]
const quotes = ["I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."]

const authorImg = document.querySelector(".testimonials__author-img")
const authorName = document.querySelector(".testimonials__author-name")
const authorDes = document.querySelector(".testimonials__author-des")
const authorQuote = document.querySelector(".testimonials__quote")

const prevBtn = document.querySelector(".testimonials__prev")
const nextBtn = document.querySelector(".testimonials__next")

let currAuthor = 0

function updateAuthor(i) {
    authorImg.src = images[i]
    authorName.textContent = names[i]
    authorDes.textContent = designations[i]
    authorQuote.textContent = quotes[i]
}
function updateBtns() {
    if (currAuthor === (images.length - 1)) {
        nextBtn.classList.add("testimonials__slider-btn--disabled")
    } else {
        nextBtn.classList.remove("testimonials__slider-btn--disabled")
    }
    if (currAuthor === 0) {
        prevBtn.classList.add("testimonials__slider-btn--disabled")
    } else {
        prevBtn.classList.remove("testimonials__slider-btn--disabled")
    }
}

function fadeOut() {
    authorImg.classList.add("testimonials__author-img--fade-out")
}
function fadeIn() {
    authorImg.classList.remove("testimonials__author-img--fade-out")
}

function nextAuthor() {
    if (currAuthor !== (images.length - 1)) {
        fadeOut()
        currAuthor++
        setTimeout(function () {
            updateAuthor(currAuthor)
            fadeIn()
        }, 150)
    }
    updateBtns()
}
function prevAuthor() {
    if (currAuthor !== 0) {
        fadeOut()
        currAuthor--
        setTimeout(function () {
            updateAuthor(currAuthor)
            fadeIn()
        }, 150)
    }
    updateBtns()
}


updateBtns()
prevBtn.addEventListener("click", prevAuthor)
nextBtn.addEventListener("click", nextAuthor)
// animateImage()

