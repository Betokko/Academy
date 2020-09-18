$(document).ready(function(){
    // slider 
    $('.prof__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
      });

      $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
    
    //   menu 
      $('.burger').click(function(event) {
        $('.burger,.nav').toggleClass('active');
        $('body').toggleClass('fixed');
      })

  });