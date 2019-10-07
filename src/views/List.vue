<template>
  <section class="d-flex flex-column align-items-center">
    <h1 class="text-muted my-5">List of persons</h1>
    <b-card
      v-for="person in persons"
      class="w-50 shadow-sm mb-4"
      :key="person.name"
      @click="handleSelectPerson(person.name)"
    >
      <b-row>
        <b-col cols="12" md="6">
          <div>
            <span class="text-muted mr-2">Name:</span>
            <span>{{person.name}}</span>
          </div>
          <div>
            <span class="text-muted mr-2">Age:</span>
            <span>{{person.age}}</span>
          </div>
        </b-col>
        <b-col class="d-flex flex-column align-items-end" cols="12" md="6">
          <div>
            <span class="text-muted mr-2">Like music:</span>
            <span>{{person.likeMusic | likeMusicFilter }}</span>
          </div>
          <div>
            <span class="text-muted mr-2">Sexual orientation:</span>
            <span>{{person.sexualOrientation | sexualOrientationFilter }}</span>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'Home',
  filters: {
    likeMusicFilter(value) {
      return value === 'true' ? 'YES' : 'NO'
    },
    sexualOrientationFilter(value) {
      switch (value) {
        case 'f':
          return 'Woman'
        case 'm':
          return 'Man'
        case 'l':
          return 'LGBT'
        default:
          break
      }
    }
  },
  computed: {
    persons() {
      return this.$store.state.forms
    }
  },
  methods: {
    handleSelectPerson(slug) {
      this.$router.push({ name: 'Show', params: { slug } })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: transform 1s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>