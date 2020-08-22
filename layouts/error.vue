<template>
  <v-app>
    <v-container>
      <v-alert prominent type="error">
        <v-row align="center">
          <v-col v-if="error.statusCode === 404" class="grow">
            {{ pageNotFound }}
          </v-col>
          <v-col v-else class="grow">
            {{ otherError }}
          </v-col>
          <v-col class="shrink">
            <v-btn to="/">Home</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
