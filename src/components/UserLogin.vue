<template lang="html">
  <form>
    <label for="email">Email</label>
    <input
      type="text"
      id="email"
      :value="user.email"/>
    <label for="password">Password</label>
    <input
      type="text"
      id="password"
      :value="user.password"/>
    <button type="button" name="button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserLogin",
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style lang="css" scoped></style>
