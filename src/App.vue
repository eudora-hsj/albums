<script setup>

import { provide, ref, onMounted } from 'vue'
import $main from '../src/mixin/main'
import $api from '../src/mixin/api'

let albumsIdAry = ref([])
let albumsObj = ref({})
provide('$albumsIdAry', albumsIdAry)
provide('$albumsObj', albumsObj)

const fetchAlbums = () => {
  return new Promise((resolve) => {
    fetch($api.apiAlbumsListUrl).then(res => res.json()).then( res => {
      albumsObj.value = res
      albumsIdAry.value = Object.keys(albumsObj.value)
      resolve()
    })
  })
}
const fetchAlbum = (albumId) => {
  const url = `${$api.apiAlbumUrlPre}/${albumId}`
  fetch(url, $api.apiParamsClientID).then(res => res.json()).then(res => {
    const {images, images_count, title, cover, datetime} = res.data
    albumsObj.value[albumId].images = images
    albumsObj.value[albumId].images_count = images_count
    albumsObj.value[albumId].datetime = datetime
    if (!albumsObj.value[albumId].title) albumsObj.value[albumId].title = title
    if (!albumsObj.value[albumId].cover) albumsObj.value[albumId].cover = cover
    albumsObj.value[albumId].cover_url = $main.setImgSizeSrc(`https://i.imgur.com/${albumsObj.value[albumId].cover}.jpg`, 'm')
    albumsObj.value[albumId].link = `/albums/${albumId}`
  })
}

onMounted(() => {
  fetchAlbums().then(() => {
    albumsIdAry.value.forEach(album => {
      fetchAlbum(album)
    })
  })
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
