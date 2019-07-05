<template lang="html">
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="headline">Begin your journey of personal growth and well-being</v-card-text>
          <v-btn to="/register">Start Your Free Account</v-btn>
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
export default {
  name: "AuthPage",
};
</script>

<style lang="css" scoped></style>
