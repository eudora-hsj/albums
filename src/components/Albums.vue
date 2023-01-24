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
.container-fluid
  .row.albums-list
    .col-12.col-sm-12.col-md-6.col-lg-4.col-xl-3.col-xxl-3(v-for="(item) in category" :key="item.id")
      .card.cursor-pointer(@click="goAlbum(item.id)")
        .card-img-top
          img(:src="item.cover" :alt='item.description')
        .card-body
          p.card-title
            span.title {{item.title}}
            span.count {{item.count}}
          //p {{item.description}}
</template>

<style lang="scss" scoped>
.albums-list {
  padding: 20px;
  max-width: 1280px;
  margin: auto;
}
.card {
  margin-bottom: 1rem;
  cursor: pointer;
  border: 0;
  border-radius: 0;
}
.card-title {
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-left: 10px;
  span {
    &.title {
      font-size: 0.95rem;
    }
    &.count {
      margin-right: 8px;
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.85rem;
    }
  }
}
.card-body {
  padding: 0.5rem 0;
  background: rgba(0,0,0,0.7);
  position: absolute;
  bottom: 0;
  left: 0;
  color: rgba(255,255,255,0.8);
  letter-spacing: 1px;
  width: 100%;
}
.card-img-top {
  height: 8rem;
  border-radius: 0;
  //box-shadow: 0 0 2px rgb(255 255 255 / 60%);
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 50%;
    min-height: 100%;
    min-width: 100%;
    filter: brightness(0.8);
  }
  &:hover {
    img {
      filter:initial;
    }
  }
}
.col-lg-4 .card-img-top {
  height: 10rem;
}
</style>
