let counter = 1;
const slideChanges = document.querySelectorAll('.swipper-slide');
const circleChanges = document.querySelectorAll('.circle');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let slideRight = () =>{
    counter++;
    const slideChange = document.querySelector('.swipper-slide.change');
    slideChange.classList.remove('change');
    const circleChange = document.querySelector('.circle.change')
    circleChange.classList.remove('change');

    if(counter > slideChanges.length) {
        slideChanges[0].classList.add('change');
        counter = 1;
    } else {
        slideChange.nextElementSibling.classList.add('change');
    }

    if(counter > circleChanges.length-1) {
        circleChanges[0].classList.add('change');
    } else {
        circleChange.nextElementSibling.classList.add('change');
    }
}

let slideLeft = () =>{
    counter++;
    const slideChange = document.querySelector('.swipper-slide.change');
    slideChange.classList.remove('change');
    const circleChange = document.querySelector('.circle.change')
    circleChange.classList.remove('change');


    if(counter > slideChanges.length) {
        slideChanges[0].classList.add('change');
        counter = 1;
    } else {
        slideChange.nextElementSibling.classList.add('change');
    }

    if(counter > circleChanges.length-1) {
        circleChanges[0].classList.add('change');
    } else {
        circleChange.nextElementSibling.classList.add('change');
    }
}

leftBtn.addEventListener('click', () => {
    slideLeft();
})
rightBtn.addEventListener('click', () => {
    slideRight();
})

// This is a really tricky part since algorithms is really painful. I tried to code with purely Css and Js instead of using Js slideshow library. Finally got to where I wanted though it's not so perfect.