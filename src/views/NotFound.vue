<script lang="ts" setup>
  const router = useRouter()
</script>

<template>
  <VContainer>
    <VRow
      class="align-center justify-center"
      style="height: calc(100vh - 96px)"
    >
      <VCol class="text-center">
        <p class="text-h3 text-primary">Whoops, 404</p>
        <p class="mb-4">The page you were looking for does not exist</p>
        <VBtn
          class="text-primary"
          variant="outlined"
          @click="router.push({ name: 'Home' })"
        >
          Get me out of here!
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
