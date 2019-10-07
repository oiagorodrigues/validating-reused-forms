<template>
  <b-container>
    <Form ref="form" :key="`form_${formId}`" :form="form" @submit.prevent>
      <template v-slot:action>
        <b-col class="mt-3" cols="12" sm="4" md="3" lg="2">
          <b-btn variant="primary" block @click="handleSubmit">Submit</b-btn>
        </b-col>
      </template>
    </Form>
  </b-container>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'home',
  components: { Form },
  data() {
    return {
      form: {},
      formId: 1
    }
  },
  created() {
    this.freshForm()
  },
  methods: {
    freshForm() {
      this.form = {
        name: '',
        age: '',
        sexualOrientation: null,
        desc: '',
        likeMusic: null,
        termsOfUse: null
      }
    },
    handleSubmit() {
      this.$refs.form
        .submit()
        .then(payload => {
          this.$store.commit('pushForms', payload)
          this.clearForm()
        })
        .catch(error => console.error(error))
    },
    clearForm() {
      this.formId++
      this.freshForm()
    }
  }
}
</script>
