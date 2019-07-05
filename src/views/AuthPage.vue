<template lang="html">
  <v-container grid-list-md text-xs-center>
    <HeaderSoundsTrueLogo />
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="headline">Begin your journey of personal growth and well-being</v-card-text>
          <v-btn color="info" to="/register">Start Your Free Account</v-btn>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12>
        <v-card>
          <v-card-text class="headline">Already a Sounds True Customer?</v-card-text>
          <v-btn color="info" to="/login">Sign In</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HeaderSoundsTrueLogo from '@/components/HeaderSoundsTrueLogo.vue'

export default {
  name: "AuthPage",

  components: {
    HeaderSoundsTrueLogo,
  }
};
</script>

<style lang="css" scoped></style>
