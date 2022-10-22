
 var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".pSlideNext",
    prevEl: ".pSlidePrev",
  },
  thumbs: {
    swiper: swiper,
  },
});
    

var swiper = new Swiper(".rpSlider", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".rpNext",
    prevEl: ".rpPrev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

 
var starWidth = 18;

$.fn.stars = function() {
  return $(this).each(function() {
    $(this).html($('<span />').width(Math.max(0, (Math.min(5, parseFloat($(this).html())))) * starWidth));
  });
}
$(document).ready(function() {
  $('span.stars').stars();
});






(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));