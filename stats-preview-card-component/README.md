# Frontend Mentor - Stats preview card component solution

Hello everyone!

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

A pixel-perfect card component with bonus animations because I have way too much time on my hands. Animation inspiration credit to [Apple Pie Giraffe](https://www.frontendmentor.io/profile/ApplePieGiraffe)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Screenshot of the challenge](./images/screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/almost-pixelperfect-card-component-with-3d-hover-effect-l1_2emoBV
- Live Site URL: https://alimansoor-create.github.io/frontend-mentor/stats-preview-card-component

## My process

### Built with

- Semantic HTML5 markup
  - `<main>` for the wrapper
  - `<article>` for the card component
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com)

### What I learned

This was a pretty basic challenge, but it was good practice.
I learned how to add animations on mouse move on elements using vanilla JavaScript

```js
wrapper.addEventListener("mousemove", function (e) {
  // Get the current mouse position
  x = e.clientX;
  y = e.clientY;

  // Get the width of the wrapper element
  w = getComputedStyle(wrapper).width.slice(0, -2);
  h = getComputedStyle(wrapper).height.slice(0, -2);

  // Get the mouse position as a percentage of the wrapper's width
  xPercent = x / w - 0.5;
  yPercent = y / h - 0.5;

  // Calculate a value for the card to rotate, max 30 degrees
  rotateY = xPercent * 30;
  rotateX = -(yPercent * 30);

  // Apply the rotation
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

### Continued development

I wish to learn more about how Javascript can be utilised to make such interactive components and animations.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/) - The one and only MDN, best resource for frontend developers in my opinion.

## Author

**Syed Ali Mansoor**

- Instagram - [@design.alimansoor](https://www.instagram.com/design.alimansoor)
- Frontend Mentor - [@alimansoor-create](https://www.frontendmentor.io/profile/alimansoor-create)

## Acknowledgments

Big props to [Apple Pie Giraffe](https://www.frontendmentor.io/profile/ApplePieGiraffe) for giving me the inspiration to make the 3d hover effect.
