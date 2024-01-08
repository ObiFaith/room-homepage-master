# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Room homepage solution](#frontend-mentor---room-homepage-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./images/active-states.jpg)

### Links

- Live Site URL: [link](https://obifaith.github.io/room-homepage-master/)
- Solution URL: [link](https://github.com/ObiFaith/room-homepage-master)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
- Retrieve data from a JSON format

To see how you can add code snippets, see below:

```js
toggleBtns.forEach(btn => {
    const nav = document.querySelector('nav');
    const navChanges = (firstUl, lastUl, width, bgClr) => {
        firstUl.classList.add('hidden');
        lastUl.classList.remove('hidden');  
        nav.style.width = width;
        nav.style.backgroundColor = bgClr;
    }
    btn.addEventListener('click', () => {
        if(btn.classList.contains('toggle_btn--open')){
            navChanges(nav.firstElementChild, nav.lastElementChild, '100%', '#fff')
            nav.style.maxWidth = '100%';
        }
        else
            navChanges(nav.lastElementChild, nav.firstElementChild, '80%', 'transparent')        
    })
})
```

### Useful resources

- [Example resource 1](https://www.example.com) - Made it easier to create the Slider functionality since I used stored and retrieve the necessary data in a JSON format

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ObiFaith)
- Twitter - [@yourusername](https://www.twitter.com/Faith_Dev)