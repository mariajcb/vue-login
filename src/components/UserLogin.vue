<template>
    <v-container>
      <v-form>
          <v-card-text class="headline">Sign in with your Sounds True Account</v-card-text>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @click:append="show = !show"
          ></v-text-field>
          <v-btn color="info" @click="submit">submit</v-btn>
      </v-form>
    </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required },
    },

    data: () => ({
      email: '',
      password: '',
      show: false
    }),

    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      }
    }
  }
</script>

<style lang="css" scoped></style>
