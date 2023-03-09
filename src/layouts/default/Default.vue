<script lang="ts" setup>
  const isLargeScreen = useMediaQuery('only screen and (min-width: 1280px)')
  const drawer = ref(isLargeScreen.value)

  function updateDrawer(value: boolean) {
    drawer.value = value
  }

  watch(isLargeScreen, () => (drawer.value = isLargeScreen.value))
</script>

<template>
  <VApp>
    <AppBar :drawer="drawer" @update:drawer="updateDrawer" />
    <Suspense>
      <NavigationDrawer :drawer="drawer" @update:drawer="updateDrawer" />
    </Suspense>
    <View />
    <Footer />
  </VApp>
</template>
