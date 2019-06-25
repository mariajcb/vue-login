<template lang="html">
  <form>
    <label for="username">User Name</label>
    <input
      type="text"
      id="username"
      :value="userData.username"/>
    <label for="password">Password</label>
    <input
      type="text"
      id="password"
      :value="userData.password"/>
    <button type="button" name="button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserLogin",
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style lang="css" scoped></style>
