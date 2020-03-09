<template>
    <v-container>
      <HeaderSoundsTrueLogo />
      <v-card-text class="headline">Sign in with your Sounds True Account</v-card-text>
      <user-login-form></user-login-form>
      <!-- <router-link :to="forgot-password"> -->
          Forgot Your Password?
      <!-- </router-link> -->
      <TheFooter />
    </v-container>
</template>

<script>
  import HeaderSoundsTrueLogo from '@/components/HeaderSoundsTrueLogo.vue'
  import TheFooter from '@/components/TheFooter.vue'
  import UserLoginForm from '@/components/UserLoginForm.vue';

  export default {
    name: "UserLogin",

    components: {
      HeaderSoundsTrueLogo,
      TheFooter,
      UserLoginForm,
    },

  }
</script>

<style lang="css" scoped></style>
