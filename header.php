<header class="header" id="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg justify-content-end">
          <a class="navbar-brand" href="#"
            ><img src="images/logo.webp" alt="logo"
          /></a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onclick="toggleNav()"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"> </span>
            <span class="navbar-toggler-icon"> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" data-attr="home" onclick="setNavElActive('home')" href="index.php">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-attr="services" onclick="setNavElActive('services')" href="index.php">SERVICES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-attr="our-team" onclick="setNavElActive('our-team')" href="team.php">OUR TEAM</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" data-attr="about" onclick="setNavElActive('about')" href="about.php">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-attr="contact" onclick="setNavElActive('contact')" href="contact.php">CONTACT US</a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    </header>