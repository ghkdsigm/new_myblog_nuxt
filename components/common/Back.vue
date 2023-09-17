<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <span @click="goback()">뒤로</span>
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            try {
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style>

</style>