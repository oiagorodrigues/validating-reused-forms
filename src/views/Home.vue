<template>
  <b-container>
    <Form msg="Welcome to Your Vue.js App" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'home',
  components: { Form }
}
</script>
