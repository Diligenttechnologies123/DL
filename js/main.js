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
  });

  // $(window).on('scroll', function() {
  //   if($(this).scrollTop() > 3137){
  //     $('.solution-svg img').removeClass('displayNone');
  //     $('.solution-svg img').addClass('displayBlock');
  //   };
//});


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




// function for background image change state in together page
  $('#analyze-state').hover(function(){
    $('#section6').css('background-image', 'url("../images/launch-state.png")');
  });

  $('#choose-state').hover(function() {
    $('#section6').css('background-image', 'url("../images/together.png")');
  });
  $('#interview-state').hover(function() {
    $('#section6').css('background-image', 'url("../images/interview-state.png")');
  });
  $('#launch-state').hover(function() {
    $('#section6').css('background-image', 'url("../images/launch-state.png")');
  });
  $('#scale-state').hover(function() {
    $('#section6').css('background-image', 'url("../images/scale-state.png")');
  });
  
  $('a').on('mouseleave', function(){
    $('.together').removeClass("hover");
  });
// function ends

// $(document).ready(function() {

//   $('nav .list ul li').click(function(e) {
//     e.preventDefault();
//     $('nav .list ul li').removeClass('#active');
//     $(this).addClass('#active');
//   });
// });

var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  
  $(this).addClass('active');  
});

//  ON SCROOOLLL ACTIVE BUTTON CHNAGE

// $(window).scroll(function() {
//   var windscroll = $(window).scrollTop();
//   if (windscroll >= 100) {
//     $('section').each(function(i) {
//       // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//       if ($(this).position().top <= windscroll - 0) {
//         $('.section-bullets li .active').removeClass('active');
//         $('.section-bullets ul  li').eq(i).addClass('active');
//       }
//     });

//   } else {

//     $('.section-bullets li .active').removeClass('active');
//     $('.section-bullets li:first').addClass('active');
//   }

//   }).scroll();

// $(function() {
//   $('a.bullets-list').bind('click', function(event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//           scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');
//       event.preventDefault();
//   });
// });

// $('nav ul li ').hover(
//   function(){ 
//     $(".nav-item").addClass('inactive').removeClass('active');
//   },
//   function(){ 
//     $(".nav-item.inactive").addClass('active').removeClass('inactive'); 
//   },
  
// );

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

