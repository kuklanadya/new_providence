$(document).ready(function () {

   //sticky header
   let scrollPos = $(this).scrollTop();
   checkScroll(scrollPos);

   $(window).on("scroll", function () {
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos);
   });

   function checkScroll(scrollPos) {
      if (scrollPos > 20) {
         $('#header').addClass("fixed");
      } else {
         $('#header').removeClass("fixed");
      }
   };

   //smooth srcoll, nav
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();
      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;

      $("html, body").animate({
         scrollTop: elementOffset - 30
      }, 700);
   })

   //burger
   $('#burger').on('click', function (event) {
      event.preventDefault();
      $('#menu').removeClass("closed");

      $('.menu__close').on('click', function (event) {
         event.preventDefault();
         $('#menu').addClass("closed");
      });
   });

   $('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      callbacks: {

         open: function () {
            $('body').css('overflow', 'hidden');
         },

         close: function () {
            $('body').css('overflow', '');
         },

      },
   });

   //wow animations
   wow = new WOW(
      {
         boxClass: 'wow',      // default
         animateClass: 'animated', // default
         offset: 0,          // default
         mobile: true,       // default
         live: true        // default
      }
   )
   wow.init();

   //slick slider
   $('.slider').slick({
      centerMode: true,
      slidesToShow: 1,
      initialSlide: 1,
      arrows: true,
      autoplay: true,
      draggable: false,
   });

   //toggles(switcher)
   let individual__column = $('#plan__columns').find('.individual');
   let company__column = $('#plan__columns').find('.company');
   let opanimation = [
      { opacity: 0 },
      { opacity: 1 }
   ];

   const probtn = document.querySelector('.column__button__pro');
   const freebtn = document.querySelector('.column__button__free');

   $('.plan__switch.individual').addClass('switch__active');
   $('.column.individual').addClass('column__active', 'column__individual__active');
   $('.column__button__free').addClass('column__button__active');

   $('.plan__switcher').find('.individual').on('click', function () {
      probtn.disabled = true;
      freebtn.disabled = false;
      $(this).addClass('switch__active');
      $(this).closest('.plan__switcher').removeClass('switcher__active');
      $(this).siblings().removeClass('switch__active');
      $('.column__button__free').addClass('column__button__active');
      $('.column__button__pro').removeClass('column__button__active');
      document.getElementById("plan__columns").animate(opanimation, 500);
      individual__column.addClass('column__active', 'column__individual__active');
      company__column.removeClass('column__active', 'column__company__active');
   });

   $('.plan__switcher').find('.company').on('click', function () {
      probtn.disabled = false;
      freebtn.disabled = true;
      $(this).addClass('switch__active');
      $(this).closest('.plan__switcher').addClass('switcher__active');
      $(this).siblings().removeClass('switch__active');
      $('.column__button__pro').addClass('column__button__active');
      $('.column__button__free').removeClass('column__button__active');
      document.getElementById("plan__columns").animate(opanimation, 500);
      company__column.addClass('column__active', 'column__company__active');
      individual__column.removeClass('column__active', 'column__individual__active');
   });

});
