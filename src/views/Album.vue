<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import $main from '../../src/mixin/main'
import $api from '../../src/mixin/api'

const route = useRoute()
const router = useRouter()
const photosList = inject('$photosList')
const imgsList = ref([])
const isShowLightBox = ref(false)
const curPhotoIdx = ref(0)
const curPhotoSrc = ref('')
const goBack = () => {
  router.go(-1);
}
const hideLightbox = () => {
  isShowLightBox.value = false
}
const showLightbox = (img, idx) => {
  isShowLightBox.value = true
  curPhotoIdx.value = idx
  // curPhotoSrc.value = img.link
  curPhotoSrc.value = $main.setImgSizeSrc(img.link, 'h')
}

const apiAlbumUrl = `https://api.imgur.com/3/album/${route.query.id}`
// const apiAlbumUrl = `/api/3/album/${route.query.id}`
const gethData = () => {
  fetch(apiAlbumUrl, $api.apiParamsClientID).then(res => res.json()).then(res => {
    setData(res.data)
  })
}
const setData = (album) => {
  photosList.value[route.query.id] = album
  imgsList.value = album.images
}
onMounted(() => {
  gethData(route.query.id)
})

</script>

<template lang="pug">


.lightBox(v-show="isShowLightBox" @click="hideLightbox()")
  span(:style="{ 'background-image': 'url(' + curPhotoSrc + ')' }")
.container-fluid
  button.btn.btn-secondary.btn-sm(type='button' @click="goBack()") Back
  .row.album-list
    .imgs
      masonry-wall(:items='imgsList' :ssr-columns='1' :column-width='300' :gap='12')
        template(#default='{ item, index }')
          div(:style='{}' @click='showLightbox(item, index)')
            img(:src="$main.setImgSizeSrc(item.link)" :alt='item.title')
      //.col-6.col-sm-6.col-md-6.col-lg-4.col-xl-3(v-for="(img, idx) in imgsList" :key="img.id" data-toggle="lightbox" data-gallery="example-gallery")
      //  .card(@click="showLightbox(img, idx)")
      //    img.card-img-top(:src="$main.setImgSizeSrc(img.link, 'm')" :alt='img.title')
</template>




<style lang="scss" scoped>
.masonry-item {
  img {
    width: 100%;
  }
}
.albums-list {
  padding: 20px;
}
.card {
  margin-bottom: 1rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
  &, img {
    border: 0;
    border-radius: 0;
  }
}
.card-img-top {
  width: 100%;
  height: 20vw;
  min-height: 8rem;
  max-height: 12rem;
  object-fit: cover;
}
.lightBox {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: pointer;
}
.lightBox span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 80vh;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 11;
}

</style>
