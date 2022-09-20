
<?php //include('db.php'); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Our Team</title>
    <link rel="icon" href="images-new/cropped-diligent-logo-32x32.png" sizes="32x32" />
    <link rel="icon" href="images-new/cropped-diligent-logo-192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="images/cropped-diligent-logo-180x180.png" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/slick.css" />
    <link rel="stylesheet" href="css/fonts.css" />
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/ion.rangeSlider.min.css"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/team.css" />
    <link rel="stylesheet" href="css/about.css" />
    <link rel="stylesheet" href="css/contact.css" />
  </head>

  <body>
    <section class="main_wrapper">
    <!-- header starts -->
    <?php include('header.php'); ?>
    <div class="header_padding" id="headerTemp"></div>
    <div class="header_nav_overlay" onclick="closeNav()"></div>
    <!-- header ends -->
    <!-- FORM STRATS -->
    <section class="talk">
      <div class="container">
        <h1>Let’s Talk</h1>

        <form class="contact_form" id="contact_form" action= "" method = "post">
        
            <div class="input_wrap form1">
              <h2>
                Hi, my name is <input type="text" name="input1" id="input1" required>
                <input type="text" name="inputLastName" id="inputLastName" onkeypress="inputNext()" required>
              </h2>
            </div>
            <div class="input_wrap form2">
              <h2>and I work at <input type="text" name="inputWork" id="inputWork" onkeypress="inputNext2()" required></h2>
            </div>
            <div class="input_wrap form3">
              <h2>I need help with <input type="text" name="inputHelp" id="inputHelp" onkeypress="inputNext3()" required></h2>
            </div>
            <div class="input_wrap form4">
              <h2>
                Personally, I feel <input type="text" name="inputFeel" id="inputFeel" onkeypress="inputNext4()" required> about this
                Project.
              </h2>
            </div>
            <div class="input_wrap form5">
              <h2>Because, I am the <input type="text" name="inputbecause" id="inputbecause" onkeypress="inputNext5()" required></h2>
            </div>
            <h2 class="budget form6">Our Budget is</h2>
            <div class="slidecontainer form-range form form6">
              <input type="text" data-min="10000" data-max="200000" data-from="25000" data-range="" value="" size="40" class="range_slider" readonly="">
            </div>

            <div class="input_wrap form6 form7">
              <h2>and this has to launch <input type="text" name="inputlaunch" id="inputlaunch" onkeypress="inputNext7()" required></h2>
            </div>
            <div class="input_wrap form8">
              <h2>
                My email is <input type="text" name="inputemail"  id="inputemail" required> My Phone is
                <input type="text" name="inputphone" id="inputphone" required>
              </h2>
            </div>
            <button type="button" id="submitBtn" onclick="formConformation('contact_form', true)">Submit</button>
          
          </div>
        </form>
      <!-- modal  -->
     
      <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#success_tic">Open Modal</button> -->
      
      
      <div id="success_tic" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
              <div class="modal-content">
                <a class="close" href="#" data-dismiss="modal">&times;</a>
                <div class="page-body">
                  <div class="head">
                    <h4>Your query has been received.We will get back to you shortly.</h4>
                    <h3></h3>
                  </div>

                  <h1 style="text-align:center;">
                    <div class="checkmark-circle">
                      <div class="background"></div>
                      <div class="checkmark draw"></div>
                    </div>
                  <h1>
                </div>
              </div>
        </div>
      </div>
    </section>

    

    <!-- FORM ENDS -->
    <!-- footer start -->
    <?php include('footer.php'); ?>
    <!-- footer ends -->
    </section>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <!-- <script src="js/Jquery.js"></script> -->
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/slick.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script
      type="text/javascript"
      src="https://js.callrail.com/group/0/ab0abdfc7cc20a12da03/12/icap.js?t=1657225646971&amp;uuid=bb172bc1-027c-463c-9a4a-6e61a960e8ce&amp;ids%5B%5D=854137864"
    ></script>
    <script src="js/ion.rangeSlider.min.js"></script>


    <script type="text/javascript">
    // for input validation and show next input on keypress
      function inputNext(){
            $(".form2")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
        function inputNext2(){
            $(".form3")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
        function inputNext3(){
            $(".form4")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
        function inputNext4(){
            $(".form5")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
        function inputNext5(){
            $(".form6")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
        function inputNext7(){
            $(".form8")
            .delay(100)
            .css("display", "block")
            .animate({ opacity: 1 }, 700);
            // alert("awais");
        }
      
      // $(document).ready(function () {
      //   $("#inputLastName").focus(function () {
      //     //$(".form2").css("display", "block").fadeIn(2000);
      //     $(".form2")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });

      //   $("#inputWork").focus(function () {
      //     $(".form3")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });

      //   $("#inputHelp").focus(function () {
      //     $(".form4")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });

      //   $("#inputFeel").focus(function () {
      //     $(".form5")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });
      //   $("#inputbecause").focus(function () {
      //     $(".budget")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });
      //   $("#inputbecause").focus(function () {
      //     $(".slidecontainer")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });

      //   $("#inputbecause").focus(function () {
      //     $(".form7")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });
      //   $("#inputlaunch").focus(function () {
      //     $(".form8")
      //       .delay(100)
      //       .css("display", "block")
      //       .animate({ opacity: 1 }, 700);
      //   });
      //   // $("#inputphone").focus(function () {
      //   //   $(".form8")
      //   //     .delay(100)
      //   //     .css("display", "block")
      //   //     .animate({ opacity: 1 }, 700);
      //   // });
      // });


      // Custom range input
        let _range_input = $('input[data-range]');

        if(_range_input) {
            _range_input.ionRangeSlider({
                prefix: "$",
            });
        }


      // $10K - $25K
      // $25K - $50K
      // $50K - $100K
      // $100K - $200K
      // $200K +
_range_input.on('change', function () {
    let that = $(this);
    let _new_value = '';
    let _data_min = that.data('min');
    let _data_max = that.data('max');
    let _data_from = _data_max / 5;
    let _data_val = that.prop('value');
    let _tool = that.parent().find('.irs-single');
    console.log(_data_val)
    if (_data_val >= 10000 && _data_val < 25000) {
        _new_value = '$' + 10 + 'K - $' + 25 + 'K';
    } else if (_data_val >= 25000 && _data_val < 50000) {
        _new_value = '$' + 25 + 'K - $' + 50 + 'K';
    } else if (_data_val >= 50000 && _data_val < 100000) {
        _new_value = '$' + 50 + 'K - $' + 100 + 'K';
    } else if (_data_val >= 100000 && _data_val < 200000) {
        _new_value = '$' + 100 + 'K - $' + 200 + 'K'
    } else {
        _new_value = '>$' + 200 + 'K';
    }
    _tool.attr('data-value', _new_value);
})
    </script>


	<!-- form validation  -->
	<script> 
		const formConformation = (formName, flag) => {
		$("#"+formName).valid();
		if($("#"+formName).valid() == false) {
			alert ('please submitt all fields')
			return false;
		} else {
			$("#success_tic").modal('show');
			return true;
		}
	}
	</script>
  
  
    <!-- form validation  -->
    <script>
      function formConformation(formName, flag){
    // submitted = flag;
    $("#"+formName).valid();
}
    </script>
    <script>
      $(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'db.php',
            data: $('form').serialize(),
            success: function () {
              $('#success_tic').modal('show');
              $( '#contact_form' ).each(function(){
                  this.reset();
              });
            }
          });

        });

      });
    </script>
  </body>
</html>
