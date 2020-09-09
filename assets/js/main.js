(function ($) {
  "use strict"


  /* 2. slick Nav */
  // mobile_menu
  var menu = $('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  };

  /* 7.  Custom Sticky Menu  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky-bar");
    } else {
      $(".header-sticky").addClass("sticky-bar");
    }
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  /* 8. sildeBar scroll */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  /* 9. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });


  /* 10. WOW active */
  new WOW({
    mobile: false,
  }).init();

  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }


  // 13 Pop Up img Video
  var popUp = $('.popup-video');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'iframe',
    });
  }

  /* ----------------- Other Inner page Start ------------------ */

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  var review = $('.client_review_slider');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
      navText: [" <i class='ti-angle-left'></i> ", "<i class='ti-angle-right'></i> "],
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: false
        },
        991: {
          nav: true
        }
      }
    });
  }


  var product_slide = $('.product_img_slide');
  if (product_slide.length) {
    product_slide.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
      navText: [" <i class='ti-angle-left'></i> ", "<i class='ti-angle-right'></i> "],
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: false
        },
        991: {
          nav: true
        }
      }
    });
  }

  //product list slider
  var product_list_slider = $('.product_list_slider');
  if (product_list_slider.length) {
    product_list_slider.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["next", "previous"],
      smartSpeed: 1000,
      responsive: {
        0: {
          margin: 15,
          nav: false,
          items: 1
        },
        600: {
          margin: 15,
          items: 1,
          nav: false
        },
        768: {
          margin: 30,
          nav: true,
          items: 1
        }
      }
    });
  }

  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- makeTimer js --------//  
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("27 Sep 2019 12:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html("<span>Days</span>" + days);
    $("#hours").html("<span>Hours</span>" + hours);
    $("#minutes").html("<span>Minutes</span>" + minutes);
    $("#seconds").html("<span>Seconds</span>" + seconds);

  }
  // click counter js
  (function () {
    window.inputNumber = function (el) {

      var min = el.attr('min') || false;
      var max = el.attr('max') || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function () {
        init($(this));
      });

      function init(el) {

        els.dec.on('click', decrement);
        els.inc.on('click', increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();

  inputNumber($('.input-number'));
  setInterval(function () {
    makeTimer();
  }, 1000);


  $('.select_option_dropdown').hide();
  $(".select_option_list").click(function () {
    $(this).parent(".select_option").children(".select_option_dropdown").slideToggle('100');
    $(this).find(".right").toggleClass("fas fa-caret-down, fas fa-caret-up");
  });

  if ($('.new_arrival_iner').length > 0) {
    var containerEl = document.querySelector('.new_arrival_iner');
    var mixer = mixitup(containerEl);
  }


  $('.controls').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  /* ----------------- Other Inner page End ------------------ */



  // Modal Activation
  $('.search-switch').on('click', function () {
    $('.search-model-box').fadeIn(400);
  });

  $('.search-close-btn').on('click', function () {
    $('.search-model-box').fadeOut(400, function () {
      $('#search-input').val('');
    });
  });

  // Grid view and list View

  $(document).ready(function () {
    $('#list').click(function (event) {
      event.preventDefault();
      $('#products .item').addClass('list-group-item');
    });
    $('#grid').click(function (event) {
      event.preventDefault();
      $('#products .item').removeClass('list-group-item');
      $('#products .item').addClass('grid-group-item');
    });
  });

  $('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    items: 1,
    responsive: {}
  })

  $('.video-about span').magnificPopup({
    type: 'iframe',
    callbacks: {
      elementParse: function (item) {
        // Function will fire for each target element
        // "item.el" is a target DOM element (if present)
        // "item.src" is a source that you may modify

        console.log(item); // Do whatever you want with "item" object
      }
    },
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }

        // you may add here more sources

      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });

  $('.procedure-carousel').owlCarousel({
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        margin: 10,
      },
      992: {
        items: 3,
        margin: 15,
      },
      1440: {
        items: 4,
        margin: 20,
      },
      1700: {
        items: 4,
      }
    }
  })

  $('.lang-selected').click(function (e) {
    e.preventDefault();
    $('.lang-dropdown').toggleClass('d-none')
  })

  var sync1 = $("#carousel-1");
  var sync2 = $("#carousel-2");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    onChanged: syncPosition,
  });

  sync2.owlCarousel({
    margin: 10,
    items: 4,
    responsive: {
      1000: {
        items: 4
      }
    },
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100,
    onInitialized: function () {
      sync2.find(".owl-item").eq(0).addClass("synced");
    },
    onChanged: syncPosition2
  });

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //end block

    sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
    // var onscreen = sync2.find('.owl-item.active').length - 1;
    // var start = sync2.find('.owl-item.active').first().index();
    // var end = sync2.find('.owl-item.active').last().index();
    sync2.trigger('to.owl.carousel', [current, 100, true]);
    // if (current > end) {
    //     sync2.trigger('to.owl.carousel', [current, 100, true]);
    // }
    // if (current < start) {
    //     sync2.trigger('to.owl.carousel', [current - onscreen, 100, true]);
    // }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.trigger('to.owl.carousel', [number, 100, true]);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.trigger('to.owl.carousel', [number, 100, true]);
  });
})(jQuery);