<template>
    <v-container>
      <HeaderSoundsTrueLogo />
      <v-card-text class="headline">Sign in with your Sounds True Account</v-card-text>
      <user-login-form></user-login-form>
      <!-- <router-link :to="forgot-password"> -->
          Forgot Your Password?
      <!-- </router-link> -->
      <FooterCustomerService />
    </v-container>
</template>

<script>
  import HeaderSoundsTrueLogo from '@/components/HeaderSoundsTrueLogo.vue'
  import FooterCustomerService from '@/components/FooterCustomerService.vue'
  import UserLoginForm from '@/components/UserLoginForm.vue';

  export default {
    name: "UserLogin",

    components: {
      HeaderSoundsTrueLogo,
      FooterCustomerService,
      UserLoginForm,
    },

  }
</script>

<style lang="css" scoped></style>
