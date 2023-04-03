(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });

  // owl-carousel
  $(".slider-active").owlCarousel({
    // loop: true,
    margin: 30,
    items: 2,
    autoplay: true,
    responsiveClass: true,
    nav: true,
    dots: true,
    dotsEach: 1,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
