<template lang="html">
  <b-container>
    <b-row class="text-center">
      <b-col>
        <h2>Begin your journey of personal growth and well-being</h2>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <b-button variant="primary" to="/register">Start Your Free Account</b-button>
      </b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
      <b-col>
        <h2>Already a Sounds True Customer?</h2>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <b-button variant="primary" to="/login">Sign In</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserLogin from "@/components/UserLogin";
import UserRegister from "@/components/UserRegister";

export default {
  name: "AuthPage",
  components: {
    UserLogin,
    UserRegister
  }
};
</script>

<style lang="css" scoped></style>
