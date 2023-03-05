<script lang="ts" setup>
  const router = useRouter()
</script>

<template>
  <VAppBar flat density="compact">
    <VAppBarTitle @click="router.push({ name: 'Home' })">
      <VIcon color="primary" icon="mdi-language-typescript" />
      NLP 100 Exercise
    </VAppBarTitle>
    <template v-slot:append>
      <ThemeSwitch />
    </template>
  </VAppBar>
</template>

<style lang="scss" scoped>
  .v-app-bar-title {
    cursor: pointer;
  }
</style>
