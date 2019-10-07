<template>
  <b-container>
    <Form ref="form" :disabled="disabled" :form="form" @submit.prevent @reset="handleCancel">
      <template v-slot:action>
        <b-col v-show="disabled" class="mt-3" cols="12" sm="4" md="3" lg="2">
          <b-btn variant="info" block @click="disabled = false">Edit</b-btn>
        </b-col>
        <b-col v-show="!disabled" class="mt-3" cols="12" sm="4" md="3" lg="2">
          <b-btn variant="primary" block @click="handleUpdate">Update</b-btn>
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
      disabled: true
    }
  },
  created() {
    this.freshForm()
  },
  methods: {
    freshForm() {
      this.form = { ...this.$store.state.form }
    },
    handleUpdate() {
      this.$refs.form
        .submit()
        .then(payload => {
          this.$store.dispatch('updateForm', payload)
          this.clearForm()
        })
        .catch(error => console.error(error))
    },
    clearForm() {
      this.disabled = true
      this.freshForm()
    },
    handleCancel() {
      this.clearForm()
      this.disabled = true
    }
  }
}
</script>
