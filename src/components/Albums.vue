<script setup>
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const category = inject('$category')
const photosList = inject('$photosList')
const goAlbum = (id) => {
  router.push({
    name: 'Album',
    query: { id }
  })
}

onMounted(() => {
  // fetchData()
})

</script>

<template lang="pug">
.container
  .row
    .col-6.col-sm-6.col-md-4.col-lg-3.col-xl-2(v-for="(item) in category" :key="item.id")
      .card.cursor-pointer(@click="goAlbum(item.id)")
        img.card-img-top(:src="item.cover" :alt='item.description')
        .card-body
          h5.card-title {{item.title}} ({{item.count}})
          //p {{item.description}}
</template>

<style scoped>
.container {
  /* TODO */
  padding-top: 1rem
}
.card {
    margin-bottom: 1rem;
    cursor: pointer;
}
.card-title {
  font-size: 1rem;
  margin-bottom: 0;
  text-align: center
}
.card-body {
    padding: 0.5rem 0;
}
.card-img-top {
    width: 100%;
    height: 15vw;
    min-height: 5.5rem;
    max-height: 8rem;
    object-fit: cover;
}
</style>
