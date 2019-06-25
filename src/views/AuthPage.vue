<template lang="html">
  <div>
    <UserLogin :userData="userData"/>
    <UserRegister />
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin";
import UserRegister from "@/components/UserRegister";

export default {
  name: "AuthPage",
  data() {
    return {
      userData: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    UserLogin,
    UserRegister
  }
};
</script>

<style lang="css" scoped></style>
