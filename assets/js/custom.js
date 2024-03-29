!(function (e) {
  "use strict";
  function t(t) {
    var o = e(document).scrollTop();
    e(".nav a").each(function () {
      var t = e(this),
        n = e(t.attr("href"));
      n.position().top <= o && n.position().top + n.height() > o
        ? (e(".nav ul li a").removeClass("active"), t.addClass("active"))
        : t.removeClass("active");
    });
  }
  function o() {
    var t = e(window).width();
    e(".submenu").on("click", function () {
      t < 992 &&
        (e(".submenu ul").removeClass("active"),
        e(this).find("ul").toggleClass("active"));
    });
  }
  o(),
    (window.sr = new scrollReveal()),
    e(".menu-trigger").length &&
      e(".menu-trigger").on("click", function () {
        e(this).toggleClass("active"), e(".header-area .nav").slideToggle(200);
      }),
    e("a[href*=\\#]:not([href=\\#])").on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var t = e(this.hash);
        if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
          return (
            e(window).width() < 991 &&
              (e(".menu-trigger").removeClass("active"),
              e(".header-area .nav").slideUp(200)),
            e("html,body").animate({ scrollTop: t.offset().top - 130 }, 700),
            !1
          );
      }
    }),
    e(document).ready(function () {
      e(document).on("scroll", t),
        e('a[href^="#"]').on("click", function (o) {
          o.preventDefault(),
            e(document).off("scroll"),
            e("a").each(function () {
              e(this).removeClass("active");
            }),
            e(this).addClass("active"),
            (n = this.hash);
          var n = e(this.hash);
          e("html, body")
            .stop()
            .animate(
              { scrollTop: n.offset().top - 10 },
              500,
              "swing",
              function () {
                (window.location.hash = n), e(document).on("scroll", t);
              }
            );
        });
    }),
    e(".home-seperator").length &&
      e(".home-seperator .left-item, .home-seperator .right-item").imgfix(),
    e(".count-item").length &&
      e(".count-item strong").counterUp({ delay: 10, time: 1e3 }),
    e(window).on("load", function () {
      e(".cover").length &&
        e(".cover").parallax({
          imageSrc: e(".cover").data("image"),
          zIndex: "1",
        }),
        e("#preloader").animate({ opacity: "0" }, 600, function () {
          setTimeout(function () {
            e("#preloader").css("visibility", "hidden").fadeOut();
          }, 300);
        });
    }),
    e(window).on("resize", function () {
      o();
    });
})(
  // Apply white background to nav bar
  window.jQuery
),
  $(window).scroll(function () {
    $(window).scrollTop() <= 100
      ? $(".header-sticky").css("background", "transparent")
      : $(".header-sticky").css("background", "white");
  });
//End of code

// Apply box-shadow on:hover to navbar when scrollTop >=100
let isHovered = false;
$(".header-sticky").hover(
  function () {
    isHovered = true;
    applyBoxShadow();
  },
  function () {
    isHovered = false;
    applyBoxShadow();
  }
);
$(window).scroll(function () {
  applyBoxShadow();
});
function applyBoxShadow() {
  if ($(window).scrollTop() >= 100 && isHovered) {
    $(".header-sticky").css("box-shadow", "0 0 15px rgba(0, 0, 0, 0.1)");
  } else {
    $(".header-sticky").css("box-shadow", "none");
  }
}
//End of code

// Change background image on button hover
$(document).ready(function () {
  // Check if the browser is Firefox
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  // If the browser isn't Firefox, enable the hover effect
  if (!isFirefox) {
    $(".contact-me").hover(
      function () {
        if ($(window).width() >= 991) {
          $("#contact-us").css(
            "background-image",
            'url("assets/images/backgrounds/contact-hover.webp")'
          );
        }
      },
      function () {
        if ($(window).width() >= 991) {
          $("#contact-us").css(
            "background-image",
            'url("assets/images/backgrounds/contact.webp")'
          );
        }
      }
    );
  }
});

// Hero Image zoom out on page load
$(document).ready(function () {
  $(function () {
    $(".welcome-area").addClass("shrink");
  });
  $(function () {
    $(".mentorshipbg").addClass("shrink");
  });
  $(function () {
    $(".aboutbg").addClass("shrink");
  });
});

$(document).ready(function () {
  // Execute this code on initial page load
  updateNavbarStyle();

  // Listen for scroll events
  $(window).scroll(function () {
    updateNavbarStyle();
  });
});

function updateNavbarStyle() {
  // Check the scroll position
  if ($(window).scrollTop() < 100) {
    $(".header-sticky").css("background", "transparent");
  } else {
    $(".header-sticky").css("background", "white");
  }
}
