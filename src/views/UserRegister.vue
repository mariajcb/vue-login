<template>
    <v-container>
      <HeaderSoundsTrueLogo />
      <v-card-text class="headline">Create a free Account</v-card-text>
      <user-register-form></user-register-form>
    </v-container>
</template>

<script>
  import HeaderSoundsTrueLogo from '@/components/HeaderSoundsTrueLogo.vue'
  import UserRegisterForm from '@/components/UserRegisterForm.vue'

  export default {
    name: "UserRegister",

    components: {
      HeaderSoundsTrueLogo,
      UserRegisterForm
    },

  }
</script>

<style lang="css" scoped></style>
