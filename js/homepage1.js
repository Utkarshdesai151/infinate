
const buttonEffect = () => {
    const buttons = document.querySelectorAll('.btn-effect');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (event) => {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            const proximity = 70;
            const magnetism = 3;

            const distance = Math.sqrt(x * x + y * y);

            if (distance < proximity) {
                button.style.transform = `translate(${x / magnetism}px, ${y / magnetism}px)`;
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
};

buttonEffect();

// foollo cursor



let circle = document.getElementById('circle2');
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');
const mouse = { x: -100, y: -100 };
const pos = { x: 0, y: 0 };
const speed = 0.1;
const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}
window.addEventListener('mousemove', updateCoordinates);
function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}
function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}
const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

const awardsSection = document.querySelector('.awards-image'); // Adjust selector if needed
const cursorMain = document.querySelector('#cursor');

awardsSection.addEventListener('mouseenter', () => {
    cursorMain.style.opacity = '0'; // Hide your circle
});

awardsSection.addEventListener('mouseleave', () => {
    cursorMain.style.opacity = '1'; // Show it back
});

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('[data-cursor-type]');
const cursorLinks = document.querySelectorAll('a:not(.cursor-style)');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.add(className);
        const cursorText = this.getAttribute('data-custom-text');
        if (cursorText !== null) {
            cursor.setAttribute('data-cursor-text', cursorText);
        } else {
            cursor.setAttribute('data-cursor-text', 'Drag');
        }
    });

    curosrModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.remove(className);
        cursor.removeAttribute('data-cursor-text');
    });
});

cursorLinks.forEach(cursorLink => {
    cursorLink.addEventListener('mouseenter', function () {
        //const className = this.getAttribute('a');
        cursor.classList.add('cursor-link');
    });

    cursorLink.addEventListener('mouseleave', function () {
        //const className = this.getAttribute('a');
        cursor.classList.remove('cursor-link');
    });
});


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: { items: 1 },
            800: { items: 2 },
            1100: { items: 3 }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;


            this.classList.toggle("active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});





function goToTop() {
    var progressPath = document.querySelector('.back-to-top path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    function updateProgress() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 300;
    var duration = 600;

    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').addClass('active-progress');
        } else {
            jQuery('.back-to-top').removeClass('active-progress');
        }
    });

    jQuery('.back-to-top').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
}
goToTop();

const counters = document.querySelectorAll('.value');
const speeds = 2000;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speeds;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});

const items = document.querySelectorAll('.awards-wrapper .awards-item');
const image = document.querySelector('.gsap-img-animation');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        image.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        image.style.opacity = '0';
    });

    item.addEventListener('mousemove', (e) => {
        image.style.top = `${e.clientY + 10}px`;
        image.style.left = `${e.clientX + 10}px`;
    });
});