$(document).ready(function () {
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    nav: false,
  });

  $('.media-slider').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
  });

  $('.award-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    prevArrow: '<span class="prev-arrow3" ><i class="fal fa-chevron-left"></i></span>',
    nextArrow: '<span class="next-arrow3" ><i class="fal fa-chevron-right"></i></span>'
  });

  $('.testimonials-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
    ]
  });
})


//change the active class
// $(document).ready(function () {
//   $('.section-bullets li a').click(function () {
//     $('.section-bullets li a.active').removeClass('active');
//     $(this).addClass('active');
//   });

//   $(window).on('scroll', function() {
//     if($(this).scrollTop() > 3137){
//       $('.solution-svg img').removeClass('displayNone');
//       $('.solution-svg img').addClass('displayBlock');
//     };
//   });


// });



function myFunction(x) {
  x.classList.toggle("change");
}


$('.myslider').slick({

  slidesToScroll: 1,
  arrows: false,
  dots: false,
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
$('#analyze-state').hover(function () {
  $('#section6').css('background-image', 'url("images/work-main-state.png")');
});
$('#interview-state').hover(function () {
  $('#section6').css('background-image', 'url("images/interview-state.png")');
});
$('#choose-state').hover(function () {
  $('#section6').css('background-image', 'url("images/choose-state.png")');
});

$('#launch-state').hover(function () {
  $('#section6').css('background-image', 'url("images/launch-state.png")');
});
$('#scale-state').hover(function () {
  $('#section6').css('background-image', 'url("images/scale-state.png")');
});

$('a').on('mouseleave', function () {
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

activeNavItem.click(function () {
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

// $(document).ready(function () { // DOM ready
//   // If a link has a dropdown, add sub menu toggle.

//   $('nav ul li a:not(:only-child)').click(function (e) {
//     $(this).siblings('.nav-dropdown').toggle();
//     // Close one dropdown when selecting another
//     $('.nav-dropdown').not($(this).siblings()).hide();
//     e.stopPropagation();
//   });
//   // Clicking away from dropdown will remove the dropdown class
//   $('html').click(function () {
//     $('.nav-dropdown').hide();
//   });
//   // Toggle open and close nav styles on click
//   $('#nav-toggle').click(function () {
//     $('nav ul').slideToggle();
//   });
//   // Hamburger to X toggle
//   $('#nav-toggle').on('click', function () {
//     this.classList.toggle('active');
//   });
// }); // end DOM ready
// //   })
// (jQuery);



// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// }

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 5);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

$(document).ready(function(){

  let headerHeight = $("#header").outerHeight();
  $(".header_padding").css('min-height', headerHeight + 'px')
  $(window).resize(function(event){
    headerHeight = $("#header").outerHeight();
    $(".header_padding").css('min-height', headerHeight + 'px')
  });

  let scrollHeightVal, lastScrollTopVal, scrollElementVal;

  $(".section-bullets .list-item").click(function() {
    scrollElementVal = $(this).attr("data-target");
    scrollHeightVal = $(scrollElementVal).offset().top + (-headerHeight);
    // if(scrollHeightVal < lastScrollTopVal){
    //   $('html, body').animate({
    //     scrollTop: scrollHeightVal
    //   }, 1000);
    // }
    // else{
    //   $('html, body').animate({
    //     scrollTop: $(scrollElementVal).offset().top
    //   }, 1000);
    // }

    // temporary
    $('html, body').animate({
      scrollTop: $(scrollElementVal).offset().top
    }, 1000);

    lastScrollTopVal = scrollHeightVal
    console.log("lastScrollTopVal ===========", lastScrollTopVal);

  });

  $(".industries .hoverImageChange").hover(
    function(){
    $ (".bg_images .bg_img").css('opacity', '0');
      let bgImage = $(this).attr("data-img")
      $(bgImage).css("opacity", '1');
    },
    function(){
      $ (".bg_images .bg_img").css('opacity', '0');
      $("#industry_bg_image").css("opacity", '1');
    }
  );

  $(".work_together .hoverImageChange").hover(
    function(){
    $ (".wt_images .wt_img").css('opacity', '0');
    $ (".work_together .hoverImageChange").removeClass('hvr');
    $ (this).addClass('hvr');
      let wtImage = $(this).attr("data-img")
      $(wtImage).css("opacity", '1');
    },
    function(){
      $ (".wt_images .wt_img").css('opacity', '0');
      $ (".work_together .hoverImageChange").removeClass('hvr');
      $ (".work_together .hoverImageChange.first").addClass('hvr');
      $("#analyse_image").css("opacity", '1');
    }
  );

  if($(window).width() < 992){
    $("header .nav-link").click(function() {
      closeNav();
    });
  }

});

let windowScrollY;

function toggleNav() {
  if($(window).width() < 992){
    if($(".navbar-collapse").hasClass("show")){
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, windowScrollY);
      $(".header_nav_overlay").removeClass("show");
    }
    else{
      $(".header_nav_overlay").addClass("show");
      windowScrollY = window.pageYOffset; //Get a windows Position
      console.log("windowScrollY at open", windowScrollY);
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '-' + windowScrollY + 'px';
    }
  }

}

function closeNav() {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  window.scrollTo(0, windowScrollY);
  $("header .navbar-collapse, .header_nav_overlay").removeClass("show");
  $(".navbar-toggler").addClass("collapsed");
}
