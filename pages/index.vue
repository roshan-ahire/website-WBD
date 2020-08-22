<template>
  <div>
    <bannerSection></bannerSection>
    <whyUsSection></whyUsSection>
    <aboutSection></aboutSection>
    <!-- <clientsSection></clientsSection> -->
    <serviceSection></serviceSection>
    <testimonialsSection></testimonialsSection>
    <portfolioSection></portfolioSection>
    <teamSection></teamSection>
    <priceSection></priceSection>
    <contactUsSection></contactUsSection>
  </div>
</template>

<script>
import bannerSection from '@/components/banner-section'
import whyUsSection from '@/components/why-us-section'
import aboutSection from '@/components/about-section'
// import clientsSection from '@/components/clients-section'
import serviceSection from '@/components/service-section'
import testimonialsSection from '@/components/testimonials-section'
import portfolioSection from '@/components/portfolio-section'
import teamSection from '@/components/team-section'
import priceSection from '@/components/price-section'
import contactUsSection from '@/components/contact-us-section'

export default {
  components: {
    bannerSection,
    whyUsSection,
    aboutSection,
    // clientsSection,
    serviceSection,
    testimonialsSection,
    portfolioSection,
    teamSection,
    priceSection,
    contactUsSection
  }
}
</script>
