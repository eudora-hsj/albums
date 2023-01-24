<script setup>

import { provide, ref, onMounted } from 'vue'
import $main from '../src/mixin/main'
import $api from '../src/mixin/api'

let photosList = ref({})
let category = ref([])
provide('$photosList', photosList)
provide('$category', category)
const fetchData = () => {
  fetch($api.apiAlbumsUrl, $api.apiParamsClientID).then(res => res.json()).then(res => {
    // photosList.value = res
    setData(res.data)
  })
}
const setData = (albums) => {

  albums.forEach((album, idx)=>{
    albums[idx].cover_url = $main.setImgSizeSrc(album.images[0].link, 'm')
    albums[idx].link = `/albums/${album.id}`
    if ($api.titleRenameList.hasOwnProperty(album.id)) albums[idx].title = $api.titleRenameList[album.id]
  })

  category.value = albums.map((album) => {
    return {
      id: album.id,
      title: album.title,
      link: album.link,
      cover: album.cover_url,
      count: album['images_count'],
      tags: album.tags,
      description: album.description,
      datetime: album.datetime
    }
  })
}

onMounted(() => {
  fetchData()
})

</script>
<template>
  <header />
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
