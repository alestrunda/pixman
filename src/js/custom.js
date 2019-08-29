(() => {
  "use strict";

  $(document).ready(() => {
    //main menu
    const $menuNav = $("#menu-nav");
    $("#menu-btn").on("click", () => {
      $menuNav.stop().slideToggle();
    });

    //main slider
    $(".slider-main__slider").slick({
      appendArrows: $(".slider-main__arrows"),
      prevArrow: '<div class="slick__arrow slick__arrow--prev"></div>',
      nextArrow: '<div class="slick__arrow slick__arrow--next"></div>',
      speed: 1000
    });
  });
})();
