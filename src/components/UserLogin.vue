<template lang="html">
  <v-form v-model="valid">
   <v-container>
     <v-layout>
       
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      <!-- </v-flex> -->

      <!-- <v-flex
        xs12
        md4
      > -->
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
      <!-- </v-flex> -->

      <v-btn @click="submit">submit</v-btn>

      </v-layout>
    </v-container>
  </v-form>
  <!-- <form>
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
    <button @click="navigateToHome" type="button" name="button">Home</button>
  </form> -->
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
  },
  methods: {
    navigateToHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style lang="css" scoped></style>
