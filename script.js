/*..........Toggle menu............*/

let mainNav = document.querySelector('.main-nav');
let navbarToggle = document.querySelector('.menu-toggle');

navbarToggle.addEventListener('click', function () {

    if (this.classList.contains('active')) {
        mainNav.style.display = "none";
        this.classList.remove('active');
    } else {
        mainNav.style.display = "block";
        this.classList.add('active');

    }
});
//................... Add active class to the current link.................//
$("document").ready(function (e) {
    $(".nav-links").click(function (e) {
        $(".nav-links").removeClass('active-link');
        $(this).addClass('active-link');
    });
});

//...................Active class for information .........................//




/*...........Slide Gallery.....................*/
// let sliderImages = document.querySelectorAll(".cell");
let arrowLeft = document.querySelectorAll(".prev");
let arrowRight = document.querySelectorAll(".next");
let dotted;
let current = 0;


// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
        dotted[i].classList.remove('active-dot');
    }
}

// Init slider 
function startSlide(id) {
    sliderImages = document.querySelectorAll(`.${id}`);
    dotted = document.querySelectorAll('.dot-' + id);
    console.log(id);
    console.log(sliderImages);
    console.log(dotted);
    reset();
    sliderImages[0].style.display = "block";
    dotted[0].classList.add('active-dot');
}

// Show prev 
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    dotted[current - 1].classList.add('active-dot');
    console.log(sliderImages[current - 1]);
    current--;
    console.log(dotted[current]);

    $(".description-project").hide(500);
}

// show next 
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    dotted[current + 1].classList.add('active-dot');
    current++;
    $(".description-project").hide(500);
    // console.log('error')
    // } else {
    //     current = 0;
    //     startSlide();
    // }


}
// prev 
arrowLeft.forEach(prev => {
    prev.addEventListener("click", function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    })
});

// next 
arrowRight.forEach(next => {
    next.addEventListener("click", function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    })
});


//....................Open Gallery .......................//

const links = document.querySelectorAll('.gallery-item');
const item = document.querySelectorAll('.port');
const close = document.querySelectorAll('.close')
const projects = document.querySelector('.projects');

// console.log(links);



Array.from(links).forEach(link => {
    link.addEventListener('click', function () {
        let itemID = document.getElementById(this.name);
        if (this.classList.contains('active')) {
            itemID.style.display = "none";
            this.classList.remove('active');
        } else {
            console.log(this.name)
            itemID.style.display = "flex";
            this.classList.add('active');
            $(".description-project").show();
            // item.classList.add('stop');
            projects.classList.add('hidde');
            console.log(window.width);
            if (window.innerWidth > 1024) {
                startSlide(this.name)
            }
        }
    })
});
close.forEach(c => {
    c.addEventListener('click', function () {
        console.log(this);
        item.forEach(items => {
            items.style.display = "none";
            items.classList.remove('active');
        });
        links.forEach(link => {
            link.classList.remove('active');
        });
        projects.classList.remove('hidde');
        projects.scrollIntoView();
        console.log(this);
    })
});

//..............Smooth Scrolling....................

$(document).ready(function () {
    const scrollLink = $('.scroll');
    // Smooth scrolling

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })
})


//............Arrrow up......................

// const arrowUp = document.getElementById('arrow-up');


// function scrollUp(arrow) {
//     // console.log(document.body.scrollTop);
//     if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         arrow.style.display = "block";
//     } else {
//         arrow.style.display = "none";
//     }
// }

// $("#arrow-up").click(function (e) {
//     console.log("work")
//     $('body, html').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });

// window.onscroll = function () {
//     scrollUp(arrowUp);
//     // changeBackground(hederColor);
// };


// ...........Show / Hide background nav..............
// const hederColor = document.querySelector('.navbar');

// function changeBackground(header) {
//     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//         header.classList.add(`navbar-color`)
//     } else {
//         header.classList.remove(`navbar-color`)
//     }
// }

// ..............Hid / Show description in gallery.................


// $(document).ready(function () {
//     $('.prev').click(function () {
//         $(".des").fadeToggle(3000);

//     })

// });

const descriptionBtn = document.querySelector('.description-btn');
const itemDescription = document.querySelector('.item-des');
const gallery = document.querySelector('.grid');

descriptionBtn.addEventListener('click', function () {
    console.log('work');
    const des = document.querySelector('.item-des');
    // des.style.display = 'none'
    des.classList.toggle(`hide-btn`);

});

$(".description-btn").click(showHideDes);

function showHideDes() {
    $(".description-project").toggle(500);
}


//....................................
// $(document).ready(function () {


//     $(window).scroll(function () {
//         $('.content').each(function (i) {
//             var bottomOfObject = $(this).offset().top + $(this).outerHeight();
//             var bottomOfWindow = $(window).scrollTop() + $(window).outerHeight();
//             console.log(`content ${$(this).outerHeight()}`);
//             console.log(`window ${bottomOfWindow}`)

//             if (bottomOfWindow > bottomOfObject) {
//                 $(this).animate({
//                     'opacity': '1'
//                 }, 900);
//             }
//         });
//     });
// });

/*.................................Card slide flip...............................*/
const card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
})