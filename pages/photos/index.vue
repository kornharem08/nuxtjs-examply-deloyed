<template>
  <div class="container">
    <!-- <div class="photos" >
      <nuxt-link :to="`/photos/${photo.id}`" v-for="photo in photos" :key="photo.id">
        <img :src="photo.download_url" class="photo-item" />
        <p>{{ photo.author }}</p></nuxt-link
      >
    </div> -->
  </div>
</template>

<script>
export default {
    middleware : 'auth'
  // async asyncData({ $axios }) {
  //   const photos = await $axios.$get("/v2/list");
  //   return { photos };
  // }
};
</script>

<style scoped>
.container {
  padding: 1rem;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>
