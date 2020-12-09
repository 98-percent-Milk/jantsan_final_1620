/*
app.js Functions for ACIT 1620 final exam

Author: Margad B Jantsan A01030831
Date: Dec 09th 2020
*/

function hide_form() {
    /* Hide "form" elements from view */
    document.querySelector('.submission').style.display = 'none';
}


function show_form() {
    /* Reveal hidden "form" elements. Set display of submission grid area 
       depending on the screen size*/
    let forms = document.querySelector('.submission');
    if (forms.style.display == 'none') {
        if (screen.availWidth > 640) {
            forms.style.display = 'block';
        } else {
            forms.style.display = 'grid';
        }
    }
}


function add_imgs() {
    /* Add Images to the html */
    const alts = ['Human Eye', 'Sea Foam', 'A Flower', 'Egyption God', 'A Butterfly']
    const bar = document.querySelector('#thumb-bar');
    bar.insertAdjacentHTML('afterbegin', "<div class='thumbnail'></div>");
    let thumbnail = bar.children[0];
    let img = '';
    for (let i = 5; i >= 1; i--) {
        img = `<img src='images/pic${i}.jpg' alt='${alts[i-1]}' class='thumb'</img>`;
        thumbnail.insertAdjacentHTML('afterbegin', img);
    }
}


function effect_blur() {
    /* Switch image with its blurred version if image exists */
    let display = document.querySelector('.displayed-img');
    let img = display.src.split('/pic')[1];
    if (img.indexOf('B') == -1) {
        display.src = display.src.replace(img, img.replace(img[0], img[0] + 'B'));
    }
}


window.addEventListener('load', (event) => {
    /* Hide from elements and add images to the html when the page loads */
    hide_form();
    add_imgs();
    const imgs = document.querySelector('.thumbnail');
    imgs.addEventListener('mouseover', (event) => {
        if (event.target.className == 'thumb') {
            const display = document.querySelector('.displayed-img');
            display.src = event.target.src;
            show_form()
        }
    })
})


window.addEventListener('resize', ()=> {
    /* Change submission template area's display depending on the screen size */
    if (screen.availWidth > 640) {
        document.querySelector('.submission').style.display = 'block';
    } else {
        document.querySelector('.submission').style.display = 'grid';
    }
})


let button = document.querySelector('button');
button.addEventListener('click', ()=> {
    /* Validates inputs from users and add effects to the images */
    let input = document.querySelector('input');
    if (input.value.toLowerCase() == 'blur') {
        effect_blur();
    } else if (input.value == '') {
        alert('Input is empty!!!');
    } else {
        alert(`${input.value} is not valid!!!`);
    }
    input.value = '';
})


