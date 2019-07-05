<template>
    <v-container>
      <HeaderSoundsTrueLogo />
      <login-form></login-form>
      <!-- <router-link :to="forgot-password"> -->
          Forgot Your Password?
      <!-- </router-link> -->
      <FooterCustomerService />
    </v-container>
</template>

<script>
  import HeaderSoundsTrueLogo from '@/components/HeaderSoundsTrueLogo.vue'
  import FooterCustomerService from '@/components/FooterCustomerService.vue'
  import LoginForm from '@/components/LoginForm.vue';

  export default {
    name: "UserLogin",

    components: {
      HeaderSoundsTrueLogo,
      FooterCustomerService,
      LoginForm,
    },

  }
</script>

<style lang="css" scoped></style>
