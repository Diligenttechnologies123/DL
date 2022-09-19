<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us</title>
    <link rel="icon" href="images-new/cropped-diligent-logo-32x32.png" sizes="32x32" />
    <link rel="icon" href="images-new/cropped-diligent-logo-192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="images/cropped-diligent-logo-180x180.png" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/slick.css" />
    <link rel="stylesheet" href="css/fonts.css" />
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />
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
  </head>

  <body>
    <!-- header starts -->
    <?php include('header.php'); ?>
    <div class="header_padding" id="headerTemp"></div>
    <div class="header_nav_overlay" onclick="closeNav()"></div>
    <!-- header ends -->

    <!-- Dedicated starts -->
    <section class="dedicated">
      <div class="container">
        <h1>
          Dedicated Software Center <br />We build teams that build your software
        </h1>
        <div class="build">
          <ul>
            <li><i class="fa fa-right-long"></i>24/7 Availability</li>
            <li><i class="fa fa-right-long"></i>Custom Software Development</li>
            <li><i class="fa fa-right-long"></i>Flexible Pricing</li>
            <li><i class="fa fa-right-long"></i>30+ Technologies</li>
            <li><i class="fa fa-right-long"></i>Site Performance Experts</li>
            <li><i class="fa fa-right-long"></i>Integration Expertise</li>
            <li><i class="fa fa-right-long"></i>IT Staff Augmentation</li>
            <li><i class="fa fa-right-long"></i>Dedicated Teams</li>
            <li><i class="fa fa-right-long"></i>Experience with Ecommerece</li>
            <li><i class="fa fa-right-long"></i>Custom Business Solutions</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Dedicated ends -->

    <!-- client strats -->

    <section class="circle-bar">
      <div class="our-clients">
        <h3>Our Clients</h3>
      </div>
      <div class="progressbar" data-animate="false">
        <div class="circle" data-percent="300">
          <div></div>
          <p>Completed Projects</p>
        </div>
      </div>
      <div class="progressbar" data-animate="false">
        <div class="circle" data-percent="270">
          <div></div>
          <p>Happy Clients</p>
        </div>
      </div>
      <div class="progressbar" data-animate="false">
        <div class="circle" data-percent="230">
          <div></div>
          <p>Positive Reviews</p>
        </div>
      </div>
    </section>

    <!-- client ends -->

    <!-- Business section start-->
    <section class="business">
      <h1>Do you need a team that can help you grow your business?</h1>
      <div class="business_button">
        <a href="contact.php" onclick="setNavElActive('contact')">Contact Us</a>
      </div>
    </section>
    <!-- Business section end -->

    <!-- footer start -->
    <?php include('footer.php'); ?>
    <!-- footer ends -->

    <script src="js/Jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/slick.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script src="js/circular-progres.js"></script>
    <script src="js/circular-bar.js"></script>
  </body>
</html>
