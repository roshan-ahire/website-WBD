<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <footer-bar />
  </v-app>
</template>

<script>
import FooterBar from '@/components/layouts/FooterBar'
export default {
  components: { FooterBar }
}
</script>
