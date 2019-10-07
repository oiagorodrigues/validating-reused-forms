<template>
  <b-form-row class="justify-content-center w-50 mx-auto">
    <b-col cols="12">
      <b-form-group label="Name" label-for="name">
        <b-form-input v-model="$v.model.name.$model"></b-form-input>
        <div v-if="$v.model.name.$error">
          <span v-if="!$v.model.name.$required" style="color: red;">Name is required</span>
        </div>
      </b-form-group>
    </b-col>

    <b-col cols="12" sm="4" md="3" lg="2">
      <b-btn variant="primary" block @click="$v.$touch()">Submit</b-btn>
    </b-col>
    <b-col cols="12" sm="4" md="3" lg="2">
      <b-btn variant="outline-danger" block @click="$v.$reset()">Reset</b-btn>
    </b-col>
  </b-form-row>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'Form',
  validations: {
    model: {
      name: { required }
    }
  },
  data() {
    return {
      model: {
        name: ''
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
