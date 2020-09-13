<template>
    <div>
        <h1>User id {{ id }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    validate({ params }) {
    return params.userid == 1
  },
    computed:{
        id(){
            return this.$route.params.userid
        }
    }
}
</script>