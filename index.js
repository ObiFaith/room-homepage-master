const data = [
    {
        id: 1,
        title: 'Discover innovative ways to decorate',
        img: "url('./images/desktop-image-hero-1.jpg')",
        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        id: 2,
        title: 'We are available all across the globe',
        img: "url('./images/desktop-image-hero-2.jpg')",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 3,
        title: 'Manufactured with the best materials',
        img: "url('./images/desktop-image-hero-3.jpg')",
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
];

const btns = document.querySelectorAll('.btn');
const sliderTitle = document.querySelector('.hero_section--title');
const sliderText = sliderTitle.nextElementSibling;
const header = document.querySelector('header');
const toggleBtns = document.querySelectorAll('.toggle_btn');

let count = 0;

const showData = data => {
    sliderTitle.innerText = data[count].title;
    sliderText.innerText = data[count].text;
    header.style.backgroundImage = data[count].img;
}

window.addEventListener('DOMContentLoaded', showData(data));

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('prev_btn')){
            count--;
            if (count < 0)
                count = data.length - 1;
        }
        else{
            count++;
            if (count > data.length - 1)
                count = 0;
        }

        showData(data)
    })    
})

document.addEventListener('keypress', (e) => {
    let key = e.key.toLowerCase();
    console.log(key);
    if (key == 'p'){
        count--;
        if (count < 0)
            count = data.length - 1;
    }
    else{
        count++;
        if (count > data.length - 1)
            count = 0;
    }
    showData(data)
})

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