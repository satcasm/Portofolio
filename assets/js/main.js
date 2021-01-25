const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')

        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('.home-title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.home-social-icon', { interval: 200 });

sr.reveal('.about-text', { delay: 400 });

sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-data', { interval: 200 });
sr.reveal('.skill-img', { delay: 600 });


sr.reveal('.work-img', { interval: 200 });
sr.reveal('.contact__input', { interval: 200 });

$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        $("section").each(function () {
            'use strict';
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 250;
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navList li a[href='#" + bb + "']").addClass("active");
            } else {
                $(".navList li a[href='#" + bb + "']").removeClass("active");

            }
        });
    });
});