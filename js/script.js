
document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu
    function dropdownMenu() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(item => {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    const subMenu = this.nextElementSibling;

                    if (!subMenu.classList.contains('show')) {
                        document.querySelectorAll('.dropdown-menu .show').forEach(el => el.classList.remove('show'));
                    }

                    subMenu.classList.toggle('show');

                    const parentDropdown = this.closest('li.nav-item.dropdown.show');
                    if (parentDropdown) {
                        parentDropdown.addEventListener('hidden.bs.dropdown', function () {
                            document.querySelectorAll('.dropdown-submenu .show').forEach(el => el.classList.remove('show'));
                        });
                    }
                });
            });
        }
    }

    // Add Class to Menu
    function menuAddClass() {
        const topMenu = document.querySelector('.top-menu');
        if (topMenu) {
            topMenu.addEventListener('click', function () {
                document.querySelector('.nav-menu').classList.toggle('open-menu');
            });
        }
    }

    // Toggle Menu
    function menuToggle() {
        document.querySelectorAll('.menu-overlay-offcanvas .navbar-nav .nav-link').forEach(item => {
            item.addEventListener('click', function () {
                const dropdownMenu = this.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }

    // Accordion
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            this.classList.toggle("active");
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                document.querySelectorAll(".accordion-content").forEach(item => item.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Offcanvas Sidebar
    const sidebarBtn = document.querySelector('.sidebar-btn');
    const closeBtns = document.querySelectorAll('.offcanvas-sidebar .btn-close, .offcanvas-backdrop');
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', function () {
            document.querySelector('.offcanvas-sidebar').classList.add('active');
        });
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelector('.offcanvas-sidebar').classList.remove('active');
            });
        });
    }

    // Owl Carousel
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

    // Back to Top
    function goToTop() {
        const progressPath = document.querySelector('.back-to-top path');
        const pathLength = progressPath.getTotalLength();

        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = pathLength;
        progressPath.style.strokeDashoffset = pathLength;

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

        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    }
    goToTop();

    // Cursor Effect
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor?.querySelector('.cursor__circle');
    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.1;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function getAngle(dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    }

    function getSqueeze(dx, dy) {
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        return Math.min(distance / 1500, 0.15);
    }

    function updateCursor() {
        const dx = mouse.x - pos.x;
        const dy = mouse.y - pos.y;
        pos.x += dx * speed;
        pos.y += dy * speed;
        const angle = getAngle(dx, dy);
        const squeeze = getSqueeze(dx, dy);
        const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
        const rotate = `rotate(${angle}deg)`;
        const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

        if (cursor && cursorCircle) {
            cursor.style.transform = translate;
            cursorCircle.style.transform = rotate + scale;
        }
    }

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Cursor Modifier
    document.querySelectorAll('[data-cursor-type]').forEach(modifier => {
        modifier.addEventListener('mouseenter', function () {
            const className = this.getAttribute('data-cursor-type');
            const text = this.getAttribute('data-custom-text') || 'Drag';
            cursor?.classList.add(className);
            cursor?.setAttribute('data-cursor-text', text);
        });
        modifier.addEventListener('mouseleave', function () {
            const className = this.getAttribute('data-cursor-type');
            cursor?.classList.remove(className);
            cursor?.removeAttribute('data-cursor-text');
        });
    });

    document.querySelectorAll('a:not(.cursor-style)').forEach(link => {
        link.addEventListener('mouseenter', () => cursor?.classList.add('cursor-link'));
        link.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-link'));
    });

    // Button Effect
    document.querySelectorAll('.btn-effect').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
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

    // Number Counter
    let upto = 90;
    let counter = document.getElementById("counter");
    if (counter) {
        let counts = setInterval(() => {
            upto++;
            counter.setAttribute("data-count", upto);
            counter.innerHTML = upto;
            if (upto === 100) clearInterval(counts);
        }, 10);
    }

    function increase() {
        const SPEED = 40;
        const value1 = document.getElementById("value1");
        const limit = parseInt(value1?.innerHTML || "0", 10);
        for (let i = 0; i <= limit; i++) {
            setTimeout(() => {
                if (value1) value1.innerHTML = i + "%";
            }, SPEED * i);
        }
    }
    increase();
});

