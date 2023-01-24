<script setup>
import { inject, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const category = inject('$category')
// const photosList = inject('$photosList')
// const goAlbum = (id) => {
// }

onMounted(() => {
})

</script>

<template lang="pug">
.brand
  //h1 Eudora
</template>

<style lang="scss" scoped>
.brand {
  height: 320px;
  max-height: 40vh;
  width: 100%;
  background: url('https://cdn4.eyeem.com/thumb/686f88029a7e7b80d68b9b887533c9bc7ac9a248-1582630816077/w/2600') center / cover;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent 72px,rgba(0,0,0,.5));
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
