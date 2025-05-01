// ---------------- Button Magnet Effect ----------------
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

// ---------------- Custom Cursor Tracking ----------------
let circle = document.getElementById('circle2');
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');
const mouse = { x: -100, y: -100 };
const pos = { x: 0, y: 0 };
const speed = 0.1;

window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function getAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}

function getSqueeze(dx, dy) {
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

function updateCursor() {
    const dx = Math.round(mouse.x - pos.x);
    const dy = Math.round(mouse.y - pos.y);

    pos.x += dx * speed;
    pos.y += dy * speed;

    const angle = getAngle(dx, dy);
    const squeeze = getSqueeze(dx, dy);

    cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    cursorCircle.style.transform = `rotate(${angle}deg) scale(${1 + squeeze}, ${1 - squeeze})`;
}

(function loop() {
    updateCursor();
    requestAnimationFrame(loop);
})();

// ---------------- Cursor Modifiers ----------------
const cursorModifiers = document.querySelectorAll('[data-cursor-type]');
const cursorLinks = document.querySelectorAll('a:not(.cursor-style)');

cursorModifiers.forEach(modifier => {
    modifier.addEventListener('mouseenter', function () {
        const type = this.getAttribute('data-cursor-type');
        const text = this.getAttribute('data-custom-text') || 'Drag';
        cursor.classList.add(type);
        cursor.setAttribute('data-cursor-text', text);
    });

    modifier.addEventListener('mouseleave', function () {
        const type = this.getAttribute('data-cursor-type');
        cursor.classList.remove(type);
        cursor.removeAttribute('data-cursor-text');
    });
});

cursorLinks.forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('cursor-link'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-link'));
});

// ---------------- Owl Carousel ----------------
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

// ---------------- Accordion ----------------
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            this.classList.toggle("active");
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        });
    });
});

// ---------------- GSAP-Like Hover Image Animation ----------------
document.querySelectorAll(".awards-item, .case-studies-item, .blog-style-3").forEach(el => {
    const image = el.querySelector('.gsap-img-animation');
    let activeImage;

    image.style.position = "absolute";
    image.style.transform = "translate(-50%, -50%)";
    image.style.opacity = "0";

    const align = (e) => {
        image.style.left = `${e.clientX}px`;
        image.style.top = `${e.clientY}px`;
    };

    const startFollow = () => document.addEventListener("mousemove", align);
    const stopFollow = () => document.removeEventListener("mousemove", align);

    el.addEventListener('mouseenter', (e) => {
        image.style.opacity = "1";
        startFollow();

        if (activeImage) {
            image.style.left = activeImage.style.left;
            image.style.top = activeImage.style.top;
        }

        activeImage = image;
        align(e);
    });

    el.addEventListener('mouseleave', () => {
        image.style.opacity = "0";
        stopFollow();
    });
});

// ---------------- Back to Top with Progress ----------------
function goToTop() {
    const progressPath = document.querySelector('.back-to-top path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    const offset = 300;
    const duration = 600;

    $(window).on('scroll', function () {
        $('.back-to-top').toggleClass('active-progress', $(this).scrollTop() > offset);
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
}
goToTop();
