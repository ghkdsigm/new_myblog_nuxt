<template>
  <header class="title">
    <ul>
      <li><nuxt-link class="logo" to="/">home</nuxt-link></li>
      <li><nuxt-link class="logo" to="/posts">posts</nuxt-link></li>
      <li><nuxt-link class="logo" to="/articles">articles</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
