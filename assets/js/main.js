$('.category-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #c00cae;"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #c00cae;"></i></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.video-slider').slick({
  infinite:true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #c00cae;"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #c00cae;"></i></button>',
});

$('.clients-slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  prevArrow: '<button type="button" class="slick-clients-prev"></button>',
  nextArrow: '<button type="button" class="slick-clients-next">></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$("#partfolio").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".partfotio").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#work").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".work").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#rates").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".rates").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#footer").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});