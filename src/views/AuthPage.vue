<template lang="html">
  <div>
    <UserLogin :user="user"/>
    <hr>
    <UserRegister />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserLogin from "@/components/UserLogin";
import UserRegister from "@/components/UserRegister";

export default {
  name: "AuthPage",
  computed: {
    ...mapState({
      user: "user",
    })
  },
  components: {
    UserLogin,
    UserRegister
  }
};
</script>

<style lang="css" scoped></style>
