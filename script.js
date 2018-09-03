/*..........Toggle menu............*/

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    console.log('work good')
})



/*.........Show Slides Gallery...............*/

let slideIndex = 1;
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// prev.addEventListener('click', showSlidess);
// next.addEventListener('click', showSlidess);

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}



// function showSlidess() {
//     let i;
//     const slides = document.querySelectorAll('.cell');
//     if (this.className === 'next') {
//         slideIndex = 1;
//         // console.log(`next + ${slideIndex}`)
//     } else if (this.className === 'prev') {
//         // console.log(`prev + ${slideIndex}`)
//         slideIndex = -1;
//     }
//     if (slideIndex > slides.length) {
//         console.log(slideIndex);
//         slideIndex = 1
//     }
//     if (slideIndex < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         console.log(slides[i])
//     }
//     // slides.forEach(slide => {
//     //     slide.style.display = "none";
//     // })
//     slides[slideIndex - 1].style.display = 'block'
// }

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".cell");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}


let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.getElementById('navbar-toggle');

// navbarToggle.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//         mainNav.style.display = "none";
//         this.classList.remove('active');
//         console.log(this.classList);
//     } else {
//         mainNav.style.display = "flex";
//         this.classList.add('active');
//         console.log(this.classList);
//     }
// });


//galery 
const links = document.querySelectorAll('.gallery-item');
const item = document.querySelector('.port');
const close = document.querySelector('.close')
const projects = document.querySelector('.projects');

console.log(links);

Array.from(links).forEach(link => {
    link.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            item.style.display = "none";
            this.classList.remove('active');
            console.log(this);
        } else {
            console.log('work')
            item.style.display = "flex";
            this.classList.add('active');
            projects.classList.add('hidde');
        }
    })
});

close.addEventListener('click', function () {
    console.log('work');
    item.style.display = "none";
    item.classList.remove('active');
    links.forEach(link => {
        link.classList.remove('active');
    });
    projects.classList.remove('hidde');
    console.log(this);
})




// })

// let textHover = document.querySelectorAll('.description');

// links.forEach(show => {
//     show.addEventListener('mouseover', function () {
//         // console.log(this);
//         textHover.forEach(showText => {
//             if (showText.classList.contains('active')) {
//                 console.log(this);
//                 // showText.style.display = 'none';
//                 showText.classList.remove('active')
//             } else {
//                 // showText.style.display = 'inline-block';
//                 showText.classList.add('active');
//             }



//         })
//     })

// })

// $('.navbar ul li a').click(function () {
//     let itemID = $(this).attr('href');
//     $('.navbar ul').addClass('item_open');
//     $(itemId).addClass('item_open');
//     return false;
// });
// $('.close').click(function () {
//     $('.port, .navbar ul').removeClass('item_open');
//     return false;
// });