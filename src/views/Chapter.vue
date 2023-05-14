<script lang="ts" setup>
  const route = useRoute()
  const store = useStore()

  const number = ref(Number(route.params.chapter))
  const chapter = ref(store.getChapter(number.value))
  const { title, description, exercises } = toRefs(chapter.value)

  const chapterCard = ref<HTMLDivElement>()
  const { width: chapterCardWidth } = useElementSize(chapterCard)

  async function updateChapter() {
    number.value = Number(route.params.chapter)
    chapter.value = store.getChapter(number.value)
    title.value = chapter.value.title
    description.value = chapter.value.description
    exercises.value = chapter.value.exercises
  }

  async function updateMeta() {
    await updateChapter()
    document.title = title.value
    ;(
      document.querySelector('meta[name="description"]') as HTMLMetaElement
    ).content = String(
      new DOMParser().parseFromString(description.value, 'text/html').body
        .textContent,
    )
  }

  onMounted(async () => await updateMeta())

  onUpdated(async () => await updateMeta())
</script>

<template>
  <VContainer class="px-0" justify="center">
    <VCard ref="chapterCard">
      <VCardTitle class="text-h5">{{ title }}</VCardTitle>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VCardText v-if="description.length" v-html="description" />
      <VCardText v-if="[2, 3, 4].includes(number)">
        <AttachmentPanel :chapter="number" />
      </VCardText>
    </VCard>
    <Exercises :exercises="exercises" :max-width="chapterCardWidth - 46" />
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
