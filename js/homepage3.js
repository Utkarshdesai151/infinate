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

  // ====== CUSTOM CURSOR EFFECT ======
  const cursor = document.querySelector('#cursor');
  const cursorCircle = cursor.querySelector('.cursor__circle');
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
    cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    cursorCircle.style.transform = `rotate(${angle}deg) scale(${1 + squeeze}, ${1 - squeeze})`;
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  document.querySelectorAll('[data-cursor-type]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add(el.getAttribute('data-cursor-type'));
      const txt = el.getAttribute('data-custom-text') || 'Drag';
      cursor.setAttribute('data-cursor-text', txt);
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove(el.getAttribute('data-cursor-type'));
      cursor.removeAttribute('data-cursor-text');
    });
  });

  document.querySelectorAll('a:not(.cursor-style)').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('cursor-link'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-link'));
  });

  // ====== OWL CAROUSEL INITIALIZATION ======
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      800: { items: 2 },
      1100: { items: 3 }
    }
  });

  // ====== ACCORDION TOGGLE ======
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  // ====== BACK TO TOP ======
  function goToTop() {
    const progressPath = document.querySelector('.back-to-top path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect(); // force layout
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    $(window).on('scroll', () => {
      $('.back-to-top').toggleClass('active-progress', $(this).scrollTop() > 300);
    });

    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  }
  goToTop();

  // ====== IMAGE FOLLOW HOVER EFFECT ======
  const items = document.querySelectorAll('.awards-wrapper .awards-item');
  const image = document.querySelector('.gsap-img-animation');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => { image.style.opacity = '1'; });
    item.addEventListener('mouseleave', () => { image.style.opacity = '0'; });
    item.addEventListener('mousemove', (e) => {
      image.style.top = `${e.clientY + 10}px`;
      image.style.left = `${e.clientX + 10}px`;
    });
  });

  // ====== LOCOMOTIVE SCROLL ======
  // if (window.LocomotiveScroll) {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true
  //   });
  // }

});