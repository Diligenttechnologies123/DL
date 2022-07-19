$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    dots:true,
   nav:false,
    });
})


$(document).ready(function(){
    $('.media-slider').slick({
    
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    dots:true,  
    });
})


$(document).ready(function(){
    $('.award-slider').slick({
        slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    dots:false,
    prevArrow: '<span class="prev-arrow3" ><i class="fal fa-chevron-left"></i></span>',
     nextArrow: '<span class="next-arrow3" ><i class="fal fa-chevron-right"></i></span>' 
    });
})

//change the active class
$(document).ready(function(){
  $('.section-bullets li a').click(function(){
    $('.section-bullets li a.active').removeClass('active');
    $(this).addClass('active');
  })
});





function myFunction(x) {
    x.classList.toggle("change");
  }


  $('.myslider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
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
    ]
        
  });



  $(document).ready(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
//   })
(jQuery);



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
} 

