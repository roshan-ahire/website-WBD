<template>
  <div>
    <!-- <v-img
    :src="require('@/assets/images/login-bg.jpg')"
    class="fill-height"
    cover
    center >
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="5">
          <v-card
            class="primary--border"
            style="background-color: rgba(0, 0, 0, 0.75);"
          >
            <v-card-text>
              <v-img
                :src="require('@/assets/images/logo-lg.png')"
                max-width="100%"
                height="100"
                contain
              ></v-img>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="form.username"
                  prepend-icon="mdi-account"
                  :rules="rules.username"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="rules.password"
                  label="Password"
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <div class="d-flex justify-end">
                  <v-btn to="/forgot-password" class="mb-2" small text>
                    Forgot password?
                  </v-btn>
                </div>
                <v-btn rounded block :disabled="!valid" color="primary">
                  Login
                </v-btn>
              </v-form>
            </v-card-text>
            <v-card-text class="pa-0 my-2 text-center">
              Not a member?
              <v-btn to="/register" color="primary" text>Join Now </v-btn>
            </v-card-text>
            <v-card-text small class="pa-0 text-center">
              <v-btn
                :href="`https://api.whatsapp.com/send?phone=${$store.state.supportContact}`"
                text
                target="_blank"
              >
                <v-icon left>mdi-whatsapp</v-icon> +{{
                  $store.state.supportContact
                }}
              </v-btn>
            </v-card-text>
            <v-card-text class="pa-0 my-2 text-center">
              Powered by
              <v-img
                :src="require('@/assets/images/betfair-logo.png')"
                height="40"
                max-width="100%"
                contain
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img> -->
  </div>
</template>

<script>
// export default {
//   layout: 'empty',
//   data: () => ({
//     valid: true,
//     showPassword: false,
//     form: { username: '', password: '' },
//     rules: {
//       password: [(v) => !!v || 'Password is required'],
//       username: [(v) => !!v || 'Username is required']
//     },
//     lazy: true
//   }),

//   methods: {}
// }
</script>
