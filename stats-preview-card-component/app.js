wrapper = document.querySelector(".wrapper")
card = document.querySelector(".card")

wrapper.addEventListener("mousemove", function (e) {
    x = e.clientX
    y = e.clientY

    w = getComputedStyle(wrapper).width.slice(0,-2)
    h = getComputedStyle(wrapper).height.slice(0,-2)

    xPercent = (x / w) - 0.5
    yPercent = (y / h) - 0.5

    // console.log(xPercent, yPercent);

    rotateY = xPercent * 30
    rotateX = -(yPercent * 30)


    // console.log(rotateX, rotateY);
    card.style.transition = ""
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

wrapper.addEventListener("mouseout", function () {
    card.style.transition = "transform 500ms ease 200ms"
    card.style.transform = "rotateX(0) rotateY(0)"
})