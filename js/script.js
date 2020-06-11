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

$(".call-btn").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#offer").offset().top,
    },
    1000
  );
});

$(".catalog__btn").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#offer").offset().top,
    },
    1000
  );
});

$(".feedback__btn").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#offer").offset().top,
    },
    1000
  );
});

$(".sets__btn").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#offer").offset().top,
    },
    1000
  );
});

$(`a[href^="#catalog-1"]`).click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#catalog-1").offset().top,
    },
    1000
  );
});
$(`a[href^="#catalog-2"]`).click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#catalog-2").offset().top,
    },
    1000
  );
});
$(`a[href^="#catalog-3"]`).click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#catalog-3").offset().top,
    },
    1000
  );
});
$(`a[href^="#catalog-4"]`).click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#catalog-4").offset().top,
    },
    1000
  );
});

buttonTop = document.getElementById("top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

$("#top-btn").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#top").offset().top,
    },
    1000
  );
});

$(".hamburger").click(function () {
  $(".header-nav").toggleClass("open");
});

$(".navlist-item").click(function () {
  $(".header-nav").removeClass("open");
});
