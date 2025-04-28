menus 
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
  
    // Offcanvas Sidebar
    function offcanvasSidebar() {
      const sidebarBtn = document.querySelector('.sidebar-btn');
      const closeBtns = document.querySelectorAll('.offcanvas-sidebar .btn-close, .offcanvas-backdrop');
  
      if (sidebarBtn) {
        sidebarBtn.addEventListener('click', function () {
          docu
  


let upto = 90;
let counter = document.getElementById("counter");
let counts = setInterval(() => {
    upto++;
    counter.setAttribute("data-count", upto);
    counter.innerHTML = upto; 
    if (upto === 100) {
        clearInterval(counts);
    }
}, 10);

function increase() {
  let SPEED = 40;
  let limit = parseInt(document.getElementById("value1").innerHTML, 10);
  for(let i = 0; i <= limit; i++) {
      setTimeout(function () {
          document.getElementById("value1").innerHTML = i + "%";
      }, SPEED * i);
  }
}
increase();

let counters = document.querySelectorAll(".timer");

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
      header.addEventListener("click", function () {
          const content = this.nextElementSibling;
          
          if (content.style.maxHeight) {
              content.style.maxHeight = null;
          } else {
              document.querySelectorAll(".accordion-content").forEach(item => item.style.maxHeight = null);
              content.style.maxHeight = content.scrollHeight + "px";
          }
      });
  });
});

// bottom to top 
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
    });})
