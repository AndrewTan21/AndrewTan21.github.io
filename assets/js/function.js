jQuery(document).ready(function($) {
  "use strict";
  $('#testimonials-list').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    // dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  });
});