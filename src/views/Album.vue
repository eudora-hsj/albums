<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
  curPhotoSrc.value = img.src
}

imgsList.value = photosList.value[route.query.idx].images
onMounted(() => {
})

</script>

<template lang="pug">
.lightBox(v-show="isShowLightBox" @click="hideLightbox()")
  span(:style="{ 'background-image': 'url(' + curPhotoSrc + ')' }")
.container
  button.btn.btn-secondary.btn-sm(type='button' @click="goBack()") Back
  p
  .row
    .col-6.col-sm-6.col-md-6.col-lg-4.col-xl-3(v-for="(img, idx) in imgsList" :key="img.id" data-toggle="lightbox" data-gallery="example-gallery") 
      .card(@click="showLightbox(img, idx)")
        img.card-img-top(:src="img.src" :alt='img.title')
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