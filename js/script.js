// $(".catalog-slider").slick({

// });

$(window).on("load resize", function () {
  if ($(window).width() < 576) {
    $("#catalog-slider:not(.slick-initialized)").slick({
      prevArrow: `<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt="prev arrow"></button>`,
      nextArrow: `<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt="next arrow"></button>`,
    });
  } else {
    $("#catalog-slider.slick-initialized").slick("unslick");
  }
});
