<script lang="ts" setup>
  const route = useRoute()
  const store = useStore()

  const number = computed(() => Number(route.params.chapter))
  const chapter = computed(async () => await store.getChapter(number.value))
  const { title, description, exercises } = toRefs(await chapter.value)

  onMounted(() => {
    document.title = title.value
    ;(
      document.querySelector('meta[name="description"]') as HTMLMetaElement
    ).content = String(
      new DOMParser().parseFromString(description.value, 'text/html').body
        .textContent,
    )
  })
</script>

<template>
  <VContainer class="px-0" justify="center">
    <VCard>
      <VCardTitle class="text-h5">{{ title }}</VCardTitle>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VCardText v-if="description.length" v-html="description" />
    </VCard>
    <Exercises :exercises="exercises" />
  </VContainer>
</template>

<style lang="scss" scoped>
  :deep() {
    li {
      margin-left: 32px;
    }

    @media only screen and (max-width: 960px) {
      .v-container {
        padding-top: 0;
      }
    }
  }
</style>
