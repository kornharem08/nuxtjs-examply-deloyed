<template>
  <div class="container flex justify-center items-center flex-col">
      <!-- Photo Detail
        <div>
            <img :src="detail.download_url" alt="" class="photo-img">
        </div>
           <nuxt-link to="/photos" class="bg-red-300">Go Back</nuxt-link> -->
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios, params }) {
  //   const detail = await $axios.$get(`/id/${params.id}/info`);
  //   return { detail };
  // }
};
</script>


<style  scoped>
.container {
  padding: 1rem;
  margin: 0 auto;
}


.photo-img{
    width: 500px;
    height: 500px;
    text-align: center;
}


</style>
