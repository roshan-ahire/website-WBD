<template>
  <div>
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2 data-aos="fade-up">Portfolio</h2>
          <p data-aos="fade-up">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <!-- <li data-filter=".filter-card">Card</li> -->
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/app1.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a
                href="assets/img/portfolio/web2.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="App 1"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/web2.jpg"
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href="assets/img/portfolio/portfolio-2.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Web 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/app2.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a
                href="assets/img/portfolio/portfolio-3.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="App 2"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/web3.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a
                href="assets/img/portfolio/portfolio-4.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Card 2"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/app3.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a
                href="assets/img/portfolio/portfolio-5.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Web 2"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/web6.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a
                href="assets/img/portfolio/portfolio-6.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="App 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/app1.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a
                href="assets/img/portfolio/web4.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Card 1"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/app4.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a
                href="assets/img/portfolio/portfolio-8.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Card 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="img-box">
              <img
                src="~@/assets/images/portfolio/web5.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href="assets/img/portfolio/portfolio-9.jpg"
                data-gall="portfolioGallery"
                class="venobox preview-link"
                title="Web 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                class="details-link"
                title="More Details"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- End Header -->
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss"></style>
