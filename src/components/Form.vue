<template>
  <b-form-row class="justify-content-center w-50 mx-auto">
    <b-col cols="12">
      <b-form-group label="Name" label-for="name">
        <b-form-input
          v-model="$v.model.name.$model"
          id="name"
          :disabled="disabled"
          :state="$v.model.name.$dirty ? !$v.model.name.$error : null"
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Age" label-for="age">
        <b-form-input
          v-model="$v.model.age.$model"
          id="age"
          :disabled="disabled"
          :state="$v.model.age.$dirty ? !$v.model.age.$error : null"
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Sexual Orientation" label-for="sexualOrientation">
        <b-form-select
          v-model="$v.model.sexualOrientation.$model"
          id="sexualOrientation"
          :disabled="disabled"
          :options="sexualOptions"
          :state="$v.model.sexualOrientation.$dirty ? !$v.model.sexualOrientation.$error : null"
        ></b-form-select>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Like music?">
        <b-form-radio
          v-model="$v.model.likeMusic.$model"
          name="like-music"
          value="true"
          :disabled="disabled"
          :state="$v.model.likeMusic.$dirty ? !$v.model.likeMusic.$error : null"
        >Yes</b-form-radio>
        <b-form-radio
          v-model="$v.model.likeMusic.$model"
          name="like-music"
          value="false"
          :disabled="disabled"
          :state="$v.model.likeMusic.$dirty ? !$v.model.likeMusic.$error : null"
        >No</b-form-radio>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Describe yourself" label-for="desc">
        <b-form-textarea
          v-model="$v.model.desc.$model"
          id="desc"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          :disabled="disabled"
          :state="$v.model.desc.$dirty ? !$v.model.desc.$error : null"
        ></b-form-textarea>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-checkbox
        v-model="$v.model.termsOfUse.$model"
        id="termsOfUse"
        name="termsOfUse"
        value="accepted"
        unchecked-value="not_accepted"
        :disabled="disabled"
        :state="$v.model.termsOfUse.$dirty ? !$v.model.termsOfUse.$error : null"
      >I accept the terms and use</b-form-checkbox>
    </b-col>

    <slot class="mt-3" name="action" />
    <b-col class="mt-3" cols="12" sm="4" md="3" lg="2">
      <b-btn variant="outline-danger" block @click="handleReset">Reset</b-btn>
    </b-col>
  </b-form-row>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'Form',
  props: {
    form: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  validations: {
    model: {
      name: { required },
      age: { required },
      sexualOrientation: { required },
      desc: { required },
      likeMusic: { required },
      termsOfUse: { required }
    }
  },
  data() {
    return {
      model: this.form,
      sexualOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'm', text: 'Masculine' },
        { value: 'f', text: 'Feminine' },
        { value: 'l', text: 'LGBT' }
      ]
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      return new Promise((resolve, reject) => {
        if (this.$v.$invalid) {
          // reject a message only to show to the parent that something is wrong.
          // you can print this in the console, but the form itself will show what is the error
          reject('Error: Invalid Form!')
        }
        // you can do something with the data here before return it
        return resolve({ ...this.model })
      })
    },
    handleReset() {
      this.$v.$reset()
      // emit a reset event so the parent can do something about it
      this.$emit('reset')
    }
  }
}
</script>

<style scoped lang="scss"></style>
