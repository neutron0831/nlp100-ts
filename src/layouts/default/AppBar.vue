<script lang="ts" setup>
  defineProps<{
    drawer: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:drawer', value: boolean): void
  }>()

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
      <VIcon
        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
        :value="drawer"
        @click="emit('update:drawer', !drawer)"
      />
    </template>
  </VAppBar>
</template>

<style lang="scss" scoped>
  .v-app-bar-title {
    cursor: pointer;
  }
</style>
