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


//.................Add active class to the current link in position.........//
$(document).ready(function () {
    $('a[href*=\\#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            // location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();


    // Assign active class to nav links while scolling
    if (window.innerWidth >= 1024) {
        $('section').each(function (i) {
            if (($(this).offset().top + this.clientHeight) <= scrollDistance + 10) {
                $('.nav-links.active').removeClass('active');
                $('.nav-links').eq(i).addClass('active');
            } else if (scrollDistance <= 0) {
                $('.nav-links.active').removeClass('active');
            }
        })
    };
}).scroll();




/*...........Slide Gallery.....................*/
let arrowLeft = document.querySelectorAll(".prev");
let arrowRight = document.querySelectorAll(".next");
let dotted;
let current = 0;


// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
        dotted[i].classList.remove('active');
    }
}

// Init slider 
function startSlide(id) {
    sliderImages = document.querySelectorAll(`.${id}`);
    dotted = document.querySelectorAll('.dot-' + id);
    reset();
    sliderImages[0].style.display = "block";
    dotted[0].classList.add('active');
}

// Show prev 
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    dotted[current - 1].classList.add('active');
    current--;
    $(".description-project").hide(500);
}

// show next 
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    dotted[current + 1].classList.add('active');
    current++;
    $(".description-project").hide(500);


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




Array.from(links).forEach(link => {
    link.addEventListener('click', function () {
        let itemID = document.getElementById(this.name);
        if (this.classList.contains('active')) {
            itemID.style.display = "none";
            this.classList.remove('active');
        } else {
            console.log(this.name)
            itemID.style.display = "flex";
            $(".description-project").show();
            // projects.classList.add('hidde');
            console.log(window.innerWidth);
            if (window.innerWidth >= 1024) {
                startSlide(this.name)
            } else {
                $('.prev, .next, .grid-dot').css('display', 'none');

            }
        }
    })
});
close.forEach(c => {
    c.addEventListener('click', closeProject)
});

function closeProject() {
    $('html, body').stop().animate({
            scrollTop: $('.projects').offset().top
        },
        0)
    item.forEach(items => {
        items.style.display = "none";
        items.classList.remove('active');
    });
    links.forEach(link => {
        link.classList.remove('active');
    });
    projects.classList.remove('hidde');

}

const descriptionBtn = document.querySelector('.description-btn');
const itemDescription = document.querySelector('.item-des');
const gallery = document.querySelector('.grid');

descriptionBtn.addEventListener('click', function () {
    const des = document.querySelector('.item-des');
    des.classList.toggle(`hide-btn`);

});

$(".description-btn").click(showHideDes);

function showHideDes() {
    $(".description-project").toggle(500);
}



/*......................Formularz...........................................*/
var frmvalidator = new Validator("contactform");
frmvalidator.addValidation("firstName", "req", "Please provide your name");
frmvalidator.addValidation("terms", "req", "Zaznacz checkbox");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation("email", "email",
    "Please enter a valid email address");