<template>
  <div>
    <form @submit="onSubmit">
      <input
        type="email"
        v-model="email"
        class="px-4 py-2 rounded-full outline-none border"
      />
      <input
        type="password"
        v-model="password"
        class="px-4 py-2 rounded-full outline-none border"
      />

      <button type="submit" class="px-4 py-2 rounded-full bg-green-600">
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const payload = {
        data: {
          email: this.email,
          password: this.password
        }
      };

      try {
        await this.$auth.loginWith("local", payload);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
