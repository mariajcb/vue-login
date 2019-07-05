<template>
  <form>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      :counter="10"
      label="First Name"
      required
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="lastName"
      :error-messages="lastNameErrors"
      :counter="10"
      label="Last Name"
      required
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    ></v-text-field>
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
      :counter="6"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      :error-messages="passwordErrors"
      label="Password (6 or more characters)"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      @click:append="show = !show"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      label="Subscribe to Sounds True Newsletter"
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn @click="submit">Create Account</v-btn>
    <v-btn to="/">Cancel</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
      firstName: { required, maxLength: maxLength(10) },
      lastName: { required, maxLength: maxLength(10) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },

    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      show: false,
      checkbox: false
    }),

    computed: {
      firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.maxLength && errors.push('First name must be at most 10 characters long')
        !this.$v.firstName.required && errors.push('First name is required.')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.maxLength && errors.push('Last name must be at most 10 characters long')
        !this.$v.lastName.required && errors.push('Last name is required.')
        return errors
      },
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
        !this.$v.password.minLength && errors.push('Password must be at most 6 characters long')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      }
    }
  }
</script>
