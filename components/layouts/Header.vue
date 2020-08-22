<template>
  <div>
    <!-- ======= Top Bar ======= -->
    <section id="topbar" class="d-none d-lg-block">
      <div class="container d-flex pa-0">
        <div class="contact-info mr-auto">
          <ul>
            <li>
              <v-icon size="18">mdi-email</v-icon>
              <a href="">roshanahire8@gmail.com</a>
            </li>
            <li>
              <v-icon size="18">mdi-phone</v-icon> <a href="">8655302830</a>
            </li>
            <li>
              <i class="icofont-clock-time icofont-flip-horizontal"></i> Mon-Fri
              9am - 5pm
            </li>
          </ul>
        </div>
        <div class="cta">
          <a href="#about" class="scrollto">Get Started</a>
        </div>
      </div>
    </section>

    <!-- ======= Header ======= -->
    <header id="header">
      <div class="container d-flex pa-0">
        <div class="logo mr-auto">
          <a href="index.html"
            ><img src="@/assets/images/wbdlogo.png" alt=""
          /></a>

          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>
        <div class="right-nav">
          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <!-- .nav-menu -->
      </div>
    </header>
  </div>
  <!-- End Header -->
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  },

  methods: {
    menuItems() {
      return this.menu
    }
  }
}
</script>
<style lang="scss">
.main-navbar {
  color: #000;
  padding: 0px 10px !important;
  box-shadow: 0 10px 50px hsl(0, 0%, 70%);
  position: fixed !important;
  top: 0px;
  z-index: 5;
  width: 100%;
  .navbar-brand {
    img {
      width: 50px;
    }
  }
  .nav-section {
    .nav-list {
      font-family: $Nunito-regular;
      margin: 0 auto;
      text-align: center;
      .nav-item {
        .nav-link {
          color: #000;
          text-decoration: none;
          font-size: 15px;
          font-family: $Nunito-regular;
          margin: 0px 10px;
          padding: 10px 10px;
          position: relative;
          z-index: 0;
          cursor: pointer;
        }
        .nav-link:before,
        .nav-link:after {
          position: absolute;
          opacity: 0;
          width: 0%;
          height: 2px;
          content: '';
          background: #000;
          transition: all 0.3s;
        }

        .nav-link:before {
          left: 0px;
          top: 0px;
        }
        .nav-link:after {
          right: 0px;
          bottom: 0px;
        }
        .nav-link:hover:before,
        .nav-link:hover:after {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
}
</style>
