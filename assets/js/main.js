$('.category-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #008BF5;"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #008BF5;"></i></button>'
  });

  $('.clients-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });


  $("#partfolio").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".partfotio").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });

   $("#work").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".work").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });

   $("#rates").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".rates").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });

   $("#footer").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".formwrap").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });