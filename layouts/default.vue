<template>
  <v-app>
    <Header />
    <v-content>
      <v-lazy><nuxt /></v-lazy>
    </v-content>
    <footer-bar />
  </v-app>
</template>

<script>
import FooterBar from '@/components/layouts/FooterBar'
import Header from '@/components/layouts/Header.vue'
export default {
  components: { FooterBar, Header }
}
</script>
