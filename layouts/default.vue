<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import AppHeader from '~/components/common/AppHeader.vue'
// eslint-disable-next-line import/no-duplicates
import AppFooter from '~/components/common/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter },
}
</script>
