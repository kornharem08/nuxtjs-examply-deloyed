<template>
  <div>
    {{ pathName }}
    <nuxt-link to="/">go main</nuxt-link>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: "Hiabout",
  data() {
    return {
      pathName: "About",
      name: this.$route.name
    };
  },
  methods:{
    async logout(){
      await this.$auth.logout()
      this.router.push('/')
    }
  }
};
</script>
