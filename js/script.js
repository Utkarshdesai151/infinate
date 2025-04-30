document.addEventListener("DOMContentLoaded", function () {
    // ====== BUTTON MAGNET EFFECT ======
    const buttonEffect = () => {
        const buttons = document.querySelectorAll('.btn-effect');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (event) => {
                const rect = button.getBoundingClientRect();
                const x = event.clientX - rect.left - rect.width / 2;
                const y = event.clientY - rect.top - rect.height / 2;
                const distance = Math.sqrt(x * x + y * y);
                if (distance < 70) {
                    button.style.transform = `translate(${x / 3}px, ${y / 3}px)`;
                }
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    };
    buttonEffect();

    // ====== CUSTOM CURSOR FOLLOW EFFECT ======
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor?.querySelector('.cursor__circle');
    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.1;

    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function updateCursor() {
        const dx = mouse.x - pos.x;
        const dy = mouse.y - pos.y;
        pos.x += dx * speed;
        pos.y += dy * speed;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const squeeze = Math.min(dist / 1500, 0.15);
        if (cursor && cursorCircle) {
            cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            cursorCircle.style.transform = `rotate(${angle}deg) scale(${1 + squeeze}, ${1 - squeeze})`;
        }
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hide cursor in awards section
    const awardsSection = document.querySelector('.awards-image');
    if (awardsSection && cursor) {
        awardsSection.addEventListener('mouseenter', () => cursor.style.opacity = '0');
        awardsSection.addEventListener('mouseleave', () => cursor.style.opacity = '1');
    }

    // Cursor modifiers
    document.querySelectorAll('[data-cursor-type]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor?.classList.add(el.dataset.cursorType);
            cursor?.setAttribute('data-cursor-text', el.dataset.customText || 'Drag');
        });
        el.addEventListener('mouseleave', () => {
            cursor?.classList.remove(el.dataset.cursorType);
            cursor?.removeAttribute('data-cursor-text');
        });
    });

    document.querySelectorAll('a:not(.cursor-style)').forEach(link => {
        link.addEventListener('mouseenter', () => cursor?.classList.add('cursor-link'));
        link.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-link'));
    });

    // ====== OWL CAROUSEL ======
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

    // ====== ACCORDION ======
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            header.classList.toggle("active");
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // ====== BACK TO TOP ======
    const progressPath = document.querySelector('.back-to-top path');
    const pathLength = progressPath?.getTotalLength();

    if (progressPath) {
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
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').addClass('active-progress');
            } else {
                $('.back-to-top').removeClass('active-progress');
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    };

    // ====== COUNTER ANIMATION ======
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
        };
        animate();
    });

    // ====== AWARDS IMAGE MOUSE MOVE ======
    const items = document.querySelectorAll('.awards-wrapper .awards-item');
    const image = document.querySelector('.gsap-img-animation');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (image) image.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            if (image) image.style.opacity = '0';
        });

        item.addEventListener('mousemove', (e) => {
            if (image) {
                image.style.top = `${e.clientY + 10}px`;
                image.style.left = `${e.clientX + 10}px`;
            }
        });
    });
})