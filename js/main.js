$(document).ready(function(){
    // slider 
    $('.prof__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              centerMode: true
            }
          }
        ]
      });

      $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              centerMode: true
            }
          }
        ]
      });

      $('.photo__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true
            }
          }
        ]
      });

      


    
    //   menu 
      $('.burger').click(function(event) {
        $('.burger,.nav').toggleClass('active');
        $('body').toggleClass('fixed');
      })

    //   smooth scroll 
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()
        let elementID = $(this).data('scroll')
        let elementOffset = $(elementID).offset().top

        $('html, body').animate({
            scrollTop:elementOffset
        })

    })



    $('article').readmore({ speed: 75, lessLink: '<a href="#">Read less</a>' });

  });