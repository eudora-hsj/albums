<script setup>

import { provide, ref, onMounted } from 'vue'

const apiUrl = "https://dawn-hsj.github.io/albums/data.json"
let photosList = ref({})
let category = ref([])
provide('$photosList', photosList)
provide('$category', category)
const fetchData = () => {
  fetch(apiUrl).then(res => res.json()).then(res => {
    photosList.value = res
    setData(res)
  })
}
const setData = (data) => {
  category.value = data.map((album, idx) => {
    return {
      index: idx,
      name: album.name,
      cover: album.images[0].src,
      count: album.images.length
    }
  })
}

onMounted(() => {
  fetchData()
})

</script>
<template>
  <header></header>
  <router-view />
  <footer>
    <!-- 日媱 -->
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* padding: 0.5rem 0; */
}
footer {
  text-align: center
}
</style>
