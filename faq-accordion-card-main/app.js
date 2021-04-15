faqs = document.querySelectorAll(".faqs__listitem")

for (let faq of faqs) {
    faq.addEventListener("click", function() {
        faq.classList.toggle("faqs__listitem--active")
        for (let otherFaq of faqs) {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("faqs__listitem--active")
            }
        }
    })
}