shareBtns = document.querySelectorAll(".card__shareBtn")
shareDialogs = document.querySelectorAll(".card__shareDialog")
cardFooters = document.querySelectorAll(".card__footer")


function toggleShare(shareBtn, shareDialog, cardFooter) {
    shareBtn.classList.toggle("card__shareBtn--active")
    shareDialog.classList.toggle("card__shareDialog--active")
    cardFooter.classList.toggle("card__footer--hidden")
}

for (let i=0; i < shareBtns.length; i++) {
    shareBtns[i].addEventListener("click", () => {
        toggleShare(shareBtns[i], shareDialogs[i], cardFooters[i])
    })
}