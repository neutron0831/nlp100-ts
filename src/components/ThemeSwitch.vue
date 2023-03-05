<script lang="ts" setup>
  const theme = useTheme()
  const dark = useStorage('dark', true)

  function toggleTheme() {
    theme.global.name.value = dark.value ? 'light' : 'dark'
    dark.value = !dark.value
  }
</script>

<template>
  <VBtn
    :icon="dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    @click="toggleTheme"
  />
</template>
