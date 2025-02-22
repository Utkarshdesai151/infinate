/*

Template: IT Infinite - IT Solutions and Services Company HTML5 Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Preloader
:: Menu
:: Sticky
:: Tooltip
:: Popover
:: Counter
:: Owl carousel
:: Slick slider
:: Countdown
:: Progressbar
:: Swiper 
:: Swiper Animation
:: Back to top
:: Magnific Popup
:: Search bar
:: Range Slider
:: Gsap
:: SmoothScroll
:: Button Effect
:: Portfolio Fancy
:: Workspaces

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
    "use strict";
    var POTENZA = {};
  
  /*************************
    Predefined Variables
  *************************/
    var $window = $(window),
      $document = $(document),
      $body = $('body'),
      $countdownTimer = $('.countdown'),
      $counter = $('.counter'),
      $progressBar = $('.skill-bar');
    //Check if function exists
    $.fn.exists = function () {
      return this.length > 0;
    };
  
    /*************************
          Preloader
    *************************/
    POTENZA.preloader = function () {
      $("#load").fadeOut();
      $('#pre-loader').delay(0).fadeOut('slow');
    };
  
  
    /*************************
          Menu
    *************************/
    POTENZA.dropdownmenu = function () {
      if ($('.navbar').exists()) {
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
        });
      }
    };
  
    POTENZA.menuaddclass = function () {
       $('.top-menu').on('click',function () {
          $('.nav-menu').toggleClass('open-menu');
      });
    };
  
    POTENZA.menuToggle = function () {
       $('.menu-overlay-offcanvas .navbar-nav .nav-link').on('click',function () {
          $(this).next('.dropdown-menu').slideToggle();
       });
    };
  
    POTENZA.offcanvasSidebar = function () {
       $('.sidebar-btn').on('click',function () {
          $('body').addClass('mobile-offcanvas');
       });
       $('.offcanvas-sidebar .btn-close, .offcanvas-backdrop').on('click',function () {
          $('body').removeClass('mobile-offcanvas');
       });
    };
  
  
    /*************************
             Sticky
    *************************/
  
    POTENZA.isSticky = function () {
      var $window       = $(window);
      var lastScrollTop = 0;
      var $header       = $('.header');
      var headerHeight  = $header.outerHeight();
  
      $window.scroll(function() {
        var windowTop  = $window.scrollTop();
  
        if ( windowTop >= headerHeight ) {
          $header.addClass( 'is-sticky' );
        } else {
          $header.removeClass( 'is-sticky' );
          $header.removeClass( 'sticky-show' );
        }
  
        if ( $header.hasClass( 'is-sticky' ) ) {
          if ( windowTop < lastScrollTop ) {
            $header.addClass( 'sticky-show' );
          } else {
            $header.removeClass( 'sticky-show' );
          }
        }
        $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);
  
        lastScrollTop = windowTop;
  
        $('#windowtop').text('scrollTop: ' + windowTop);
      });
    };
  
  
    /*************************
         Tooltip
    *************************/
    POTENZA.Tooltip = function() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    }
  
    /*************************
          Popover
    *************************/
    POTENZA.Popover = function() {
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
      })
    }
  
    /*************************
           Counter
    *************************/
    POTENZA.counters = function () {
      var counter = jQuery(".counter");
      if (counter.length > 0) {
        $counter.each(function () {
          var $elem = $(this);
          $elem.appear(function () {
            $elem.find('.timer').countTo();
          });
        });
      }
    };
  
    /*************************
        Custom Accordion
    *************************/
    POTENZA.customAccordion = function () {
      // (Optional) Active an item if it has the class "is-active"
      $(".pgs-accordion > .accordion-item.is-active").children(".accordion-content").slideDown();
      $(".pgs-accordion > .accordion-item").click(function() {
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-content").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-content").slideToggle("ease-out");
      });
    };
  
    /*************************
           Owl carousel
    *************************/
    POTENZA.carousel = function () {
      var owlslider = jQuery("div.owl-carousel");
      if (owlslider.length > 0) {
        owlslider.each(function () {
          var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $center = ($this.attr('data-center')) ? $this.data('center') : false,
            $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
            $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
            $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30,
            $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;
          $(this).owlCarousel({
            loop: $loop,
            center: $center,
            items: $items,
            responsive: {
              0: {
                items: $this.data('xx-items') ? $this.data('xx-items') : 1
              },
              575: {
                items: $this.data('xs-items') ? $this.data('xs-items') : 1
              },
              768: {
                items: $this.data('sm-items') ? $this.data('sm-items') : 2
              },
              992: {
                items: $this.data('md-items') ? $this.data('md-items') : 3
              },
              1200: {
                items: $this.data('lg-items') ? $this.data('lg-items') : 4
              },
              1400: {
                items: $items
              }
            },
            dots: $navdots,
            autoplayTimeout: $autospeed,
            smartSpeed: $smartspeed,
            autoHeight: $autohgt,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
          });
        });
      }
    }
  
    /*************************
          Slick slider
    *************************/
    POTENZA.slickslider = function () {
      if ($('.slider-for').exists()) {
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        });
      }
    };
  
  
    /*************************
             Countdown
    *************************/
    POTENZA.countdownTimer = function () {
      if ($countdownTimer.exists()) {
        $countdownTimer.downCount({
          date: '09/14/2025 12:00:00', // Month/Date/Year HH:MM:SS
          offset: -4
        });
      }
    }
  
  
    /*************************
      Swiper Slider
    *************************/
    POTENZA.historySwiperSlider = function() {
      new Swiper('.swiper-container', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        breakpoints: {
        
          1199: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
    }
  
    /*---------------------------*/
    /* Workspaces Centered */
    /*---------------------------*/
  
  
    /*************************
           Progressbar
    *************************/
    POTENZA.progressBar = function () {
      if ($progressBar.exists()) {
        $progressBar.each(function (i, elem) {
          var $elem = $(this),
            percent = $elem.attr('data-percent') || "100",
            delay = $elem.attr('data-delay') || "100",
            type = $elem.attr('data-type') || "%";
  
          if (!$elem.hasClass('progress-animated')) {
            $elem.css({
              'width': '0%'
            });
          }
          var progressBarRun = function () {
            $elem.animate({
              'width': percent + '%'
            }, 'easeInOutCirc').addClass('progress-animated');
  
            $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
          };
          $(elem).appear(function () {
            setTimeout(function () {
              progressBarRun();
            }, delay);
          });
        });
      }
    };
  
    /*************************
         Back to top
    *************************/
    POTENZA.goToTop = function () {
      var progressPath = document.querySelector('.back-to-top path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();
      $(window).scroll(updateProgress); 
      var offset = 300;
      var duration = 600;
      jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').addClass('active-progress');
        } else {
          jQuery('.back-to-top').removeClass('active-progress');
        }
      });       
      jQuery('.back-to-top').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    }
  
    /*************************
    Search bar
    *************************/
    POTENZA.searchbar = function () {
      if ($("#search").exists()) {
        $('a[href="#search"]').on('click', function(event) {
          event.preventDefault();
          $('#search').addClass('open');
          $('#search > form > input[type="search"]').focus();
        });
        $('#search, #search button.close').on('click keyup', function(event) {
          if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
          }
        });
        //Do not include! This prevents the form from submitting for DEMO purposes only!
        $('form').submit(function(event) {
          event.preventDefault();
          return false;
        })
      }
    }
  
    /*************************
        Range Slider
    *************************/
    POTENZA.rangesliders = function () {
      if ($('.property-price-slider').exists()) {
        var rangeslider = jQuery(".rangeslider-wrapper");
        $("#property-price-slider").ionRangeSlider({
          type: "double",
          min: 0,
          max: 10000,
          from: 1000,
          to: 8000,
          prefix: "$",
          hide_min_max: true,
          hide_from_to: false
        });
      }
    };
  
  
    /*************************
        Magnific Popup
    *************************/
    POTENZA.mediaPopups = function () {
      if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        if ($(".popup-single").exists()) {
          $('.popup-single').magnificPopup({
            type: 'image'
          });
        }
        if ($(".popup-gallery").exists()) {
          $('.popup-gallery').magnificPopup({
            delegate: 'a.portfolio-img',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
          });
        }
        if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
          $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          });
        }
        var $modal = $('.modal-onload');
        if ($modal.length > 0) {
          $('.popup-modal').magnificPopup({
            type: 'inline'
          });
          $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
          });
          var elementTarget = $modal.attr('data-target');
          setTimeout(function () {
            $.magnificPopup.open({
              items: {
                src: elementTarget
              },
              type: "inline",
              mainClass: "mfp-no-margins mfp-fade",
              closeBtnInside: !0,
              fixedContentPos: !0,
              removalDelay: 500
            }, 0)
          }, 1500);
        }
      }
    }
  
    /*************************
      Gsap
    *************************/
    gsap.set('.awards-wrapper img.gsap-img-animation, .case-studies-wrapper img.gsap-img-animation, .blog-style-3 img.gsap-img-animation', { yPercent: -50, xPercent: -50 });
    let activeImage;
    gsap.utils.toArray(".awards-item, .case-studies-item, .blog-style-3").forEach((el) => {
      let image = el.querySelector('.gsap-img-animation'),
        setX, setY,
      align = e => {
        setX(e.clientX);
        setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
      
      el.addEventListener('mouseenter', (e) => {
        fade.play();
        startFollow();
        if (activeImage) { // if there's an actively-animating one, we should match its position here
          gsap.set(image, {x: gsap.getProperty(activeImage, "x"), y: gsap.getProperty(activeImage, "y")});
        }
        activeImage = image;
        setX = gsap.quickTo(image, "x", {duration: 0.5, ease: "power3"}),
        setY = gsap.quickTo(image, "y", {duration: 0.5, ease: "power3"})
        align(e);
      });
      
      el.addEventListener('mouseleave', () => fade.reverse());
     
    });
  
    /*************************
      Lenis Smooth Scroll
    *************************/
  
    POTENZA.lenisSmoothScroll = function () {
      const lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: true,
        lerp: 0.1,
      });
  
      // Get all elements with the '.lenis-scroll-disable' class
      const offcanvases = document.querySelectorAll('.lenis-scroll-disable');
  
      // Check if there are any '.lenis-scroll-disable' elements before attaching event listeners
      offcanvases.forEach((offcanvas) => {
        offcanvas.addEventListener('wheel', (event) => {
          event.stopImmediatePropagation();
        });
  
        offcanvas.addEventListener('touchstart', (event) => {
          event.stopImmediatePropagation();
        });
  
        offcanvas.addEventListener('touchmove', (event) => {
          event.stopImmediatePropagation();
        });
      });
  
      // Handle preventing smooth scroll on select2 dropdowns
      document.addEventListener('wheel', (event) => {
        // Check if the event target is within a select2 dropdown
        if (event.target.closest('.select2-container') || event.target.closest('.select2-dropdown')) {
          // Prevent Lenis smooth scroll when inside a select2 dropdown
          event.stopImmediatePropagation();
        }
      });
  
      document.addEventListener('touchstart', (event) => {
        // Check if the event target is within a select2 dropdown
        if (event.target.closest('.select2-container') || event.target.closest('.select2-dropdown')) {
          // Prevent Lenis smooth scroll when inside a select2 dropdown
          event.stopImmediatePropagation();
        }
      });
  
      // Create the requestAnimationFrame loop for Lenis
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  
    POTENZA.lenisSmoothScroll2 = function () {
      function updateScrollbar() {
        const body = document.body;
        const html = document.documentElement;
  
        if (html.scrollHeight > html.clientHeight) {
          document.documentElement.style.setProperty('--scrollbar-width', '4px');
        } else {
          document.documentElement.style.setProperty('--scrollbar-width', '0px');
        }
      }
  
      window.addEventListener('resize', updateScrollbar);
      window.addEventListener('load', updateScrollbar);
  
      updateScrollbar();
    }
  
    /*************************
        Cursor
    *************************/
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
  
    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1
  
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
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const rotate = 'rotate(' + angle +'deg)';
      const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
  
      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    };
  
    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }
  
    requestAnimationFrame(loop);
  
    const cursorModifiers = document.querySelectorAll('[data-cursor-type]');
    const cursorLinks = document.querySelectorAll('a:not(.cursor-style)');
  
    cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function() {
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.add(className);
        const cursorText = this.getAttribute('data-custom-text');
        if (cursorText !== null) {
          cursor.setAttribute('data-cursor-text', cursorText);
        } else {
          cursor.setAttribute('data-cursor-text', 'Drag');
        }
      });
  
      curosrModifier.addEventListener('mouseleave', function() {
        const className = this.getAttribute('data-cursor-type');
        cursor.classList.remove(className);
        cursor.removeAttribute('data-cursor-text');
      });
    });
  
    cursorLinks.forEach(cursorLink => {
      cursorLink.addEventListener('mouseenter', function() {
        //const className = this.getAttribute('a');
        cursor.classList.add('cursor-link');
      });
  
      cursorLink.addEventListener('mouseleave', function() {
        //const className = this.getAttribute('a');
        cursor.classList.remove('cursor-link');
      });
    });
  
     
    /*************************
    Shuffle
    *************************/
    POTENZA.shuffle = function () {
      if ($('.my-shuffle-container').exists()) {
        var Shuffle = window.Shuffle;
        var element = document.querySelector('.my-shuffle-container');
        var sizer = element.querySelector('.my-sizer-element');
        var shuffleInstance = new Shuffle(element, {
          itemSelector: '.grid-item',
          sizer: sizer, // could also be a selector: '.my-sizer-element'
          speed: 700,
          columnThreshold: 0
        });
        jQuery(document).ready(function(){
          jQuery(".btn-filter").on( 'click', function(){
            var data_group = jQuery(this).attr('data-group');
            if( data_group != 'all' ){
              shuffleInstance.filter([data_group]);
            } else {
              shuffleInstance.filter();
            }
          });
          $(".filters-group .btn-filter").on( 'click', function(){
            $(".filters-group .btn-filter").removeClass("active");
            $(this).addClass("active");
          });
        });
      }
    }
  
    /*************************
     Qty
    *************************/
    POTENZA.qty = function () {
      $(document).ready(function() {
        $('.minus').click(function () {
          var $input = $(this).parent().find('input');
          var count = parseInt($input.val()) - 1;
          count = count < 1 ? 1 : count;
          $input.val(count);
          $input.change();
          return false;
        });
        $('.plus').click(function () {
          var $input = $(this).parent().find('input');
          $input.val(parseInt($input.val()) + 1);
          $input.change();
          return false;
        });
      });
    }
  
    /*************************
     Button Effect
    *************************/
    POTENZA.buttonEffect = function () {
      $.attractHover('.btn-effect',{
          proximity: 70,
          magnetism: 3
        }
      );
    };
  
    /*************************
     Portfolio Fancy
    *************************/
    POTENZA.casestudyFancy = function () {
      var portfolioItem = $('.case-study-fancy-wrapper .case-studies-wrapper');
      $(portfolioItem).hover(function(){
        $(portfolioItem).removeClass("active");
        $(this).addClass("active");
      });
    };
  
    /*************************
    Workspaces
    *************************/
    POTENZA.workspaces = function () {
      $(".workspaces-inner .workspaces-content").each(function() {
        var blockHover = $(this);
        blockHover.children('.workspaces-info-item').hover(function() {
          blockHover.find('.workspaces-info-item').removeClass('item-active');
          $(this).addClass('item-active');
          var id = $(this).data('tab');
          $(this).parents(".workspaces-inner").find(".workspaces-image-item").removeClass('image-active');
          $('#'+id).addClass("image-active");
        });
      });
    };
  
    /*************************
     Sticky Footer
    *************************/
    POTENZA.stickyFooter = function () {
      var footerHeight = $('.sticky-footer').height();
      $('.site-content').css('margin-bottom', footerHeight+'px');
    };
  
    /*************************
     Jarallax BG
    *************************/
    POTENZA.jarallaxBG = function () {
      // jarallax(document.querySelectorAll('.jarallax'), {
      //     speed: 0.2
      // });
  
      if ($('.jarallax').exists()) {
        jarallax(document.querySelectorAll('.jarallax'), {
          speed: 0.2
        });
      }
    };
  
  
    /****************************************************
         POTENZA Window load and functions
    ****************************************************/
    //Window Resize functions
    $(window).resize(function(){
      POTENZA.stickyFooter();
    });
  
    //Window load functions
    $window.on("load", function () {
      POTENZA.preloader(),
      POTENZA.shuffle(),
      POTENZA.customAccordion(),
      POTENZA.progressBar(),
      POTENZA.stickyFooter();
    });
  
    //Document ready functions
    $document.ready(function () {
      POTENZA.counters(),
      POTENZA.slickslider(),
      POTENZA.dropdownmenu(),
      POTENZA.menuaddclass(),
      POTENZA.menuToggle(),
      POTENZA.offcanvasSidebar(),
      POTENZA.lenisSmoothScroll(),
      POTENZA.lenisSmoothScroll2(),
      POTENZA.isSticky(),
      POTENZA.goToTop(),
      POTENZA.countdownTimer(),
      POTENZA.Tooltip(),
      POTENZA.Popover(),
      POTENZA.historySwiperSlider(),
      POTENZA.searchbar(),
      POTENZA.rangesliders(),
      POTENZA.mediaPopups(),
      POTENZA.carousel(),
      POTENZA.qty(),
      POTENZA.buttonEffect(),
      POTENZA.casestudyFancy(),
      POTENZA.workspaces(),
      POTENZA.jarallaxBG();
    });
  })(jQuery);