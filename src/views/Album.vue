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

// const apiAlbumUrl = `https://api.imgur.com/3/album/${route.query.id}`
const apiAlbumUrl = `https://api.imgur.com/3/album/${route.query.id}/images`
// const apiAlbumUrl = `/api/3/album/${route.query.id}`
const gethData = () => {
  fetch(apiAlbumUrl, $api.apiParamsClientID).then(res => res.json()).then(res => {
    setData(res.data)
  })
}
const setData = (album) => {
  photosList.value[route.query.id] = album
  imgsList.value = album
}
onMounted(() => {
  gethData(route.query.id)
})

</script>

<template lang="pug">


.lightBox(v-show="isShowLightBox" @click="hideLightbox()")
  span(:style="{ 'background-image': 'url(' + curPhotoSrc + ')' }")
.container-fluid
  button.btn.btn-secondary.btn-lg(type='button' @click="goBack()") ❮
  //p {{$api.titleRenameList[route.query.id]}}
  .row.album-list
    .col-6.col-sm-6.col-md-6.col-lg-4.col-xl-3(v-for="(img, idx) in imgsList" :key="img.id" data-toggle="lightbox" data-gallery="example-gallery")
      .card(@click="showLightbox(img, idx)")
        img.card-img-top(:src="$main.setImgSizeSrc(img.link, 'm')" :alt='img.title')
    //.imgs
    //  masonry-wall(:items='imgsList' :ssr-columns='1' :column-width='300' :gap='12')
    //    template(#default='{ item, index }')
    //      div(:style='{}' @click='showLightbox(item, index)')
    //        img(:src="$main.setImgSizeSrc(item.link)" :alt='item.title')
</template>




<style lang="scss" scoped>
//.masonry-item {
//  img {
//    width: 100%;
//    box-shadow: 0px 0px 2px rgb(255 255 255 / 50%);
//  }
//}
button.btn.btn-secondary.btn-lg {
  background: none;
  border: 0;
  color: #ccc;
  &:hover {
    color: #fff;
  }
}
.container-fluid {
  padding: 20px;
  margin: auto;
  max-width: 1280px;
}
.albums-list {
  padding: 20px;
  max-width: 1280px;
  margin: auto;
}
.card {
  margin-bottom: 1rem;
  cursor: pointer;
  &, img {
    border: 0;
    border-radius: 0;
  }
  img {
    filter: brightness(0.9);
  }
  &:hover {
    img {
      filter:initial;
    }
  }
}
.card-img-top {
  width: 100%;
  height: 20vw;
  min-height: 8rem;
  max-height: 12rem;
  object-fit: cover;
  //box-shadow: 0 0 2px rgb(255 255 255 / 60%);
}
.lightBox {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: pointer;
}
.lightBox span {
  filter: drop-shadow(0 0 1px #ddd);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 11;
}

</style>
