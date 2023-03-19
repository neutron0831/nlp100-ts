<script lang="ts" setup>
  import { Exercise } from '@/store/app'

  const props = defineProps<{
    exercises: Exercise[]
  }>()

  const theme = useTheme()
  const route = useRoute()

  const dark = computed(() => theme.global.current.value.dark)

  function invertImg() {
    if (route.params.chapter === '5') {
      const svo: HTMLImageElement = document.querySelector('img[alt="SVO"]')!
      svo.style.filter = `invert(${dark.value ? 0.93 : 0})`
    }
  }

  function scrollToExercise() {
    const id = route.hash
    if (route.hash) {
      const number = Number(id.slice(1))
      if (props.exercises.some((exercises) => exercises.number === number)) {
        let exercise
        const searchExercise = setInterval(() => {
          exercise = document.getElementById(`ex${number}`)
          if (exercise) {
            const y = exercise.getBoundingClientRect().top + scrollY - 60
            scrollTo({ top: y, behavior: 'smooth' })
            clearInterval(searchExercise)
          }
        }, 500)
      }
    }
  }

  onMounted(() => {
    invertImg()
    scrollToExercise()
  })

  onUpdated(() => {
    invertImg()
    scrollToExercise()
  })

  watch(dark, () => invertImg())

  watch(
    () => route.hash,
    () => scrollToExercise(),
  )
</script>

<template>
  <VTimeline align="start" side="end" truncate-line="end">
    <VTimelineItem
      v-for="exercise in exercises"
      :key="exercise.number"
      :dot-color="exercise.state === 'open' ? 'grey' : 'primary'"
      size="x-small"
    >
      <div :id="`ex${exercise.number}`" v-html="exercise.body"></div>
      <CodeCard :number="exercise.number" :state="exercise.state" />
    </VTimelineItem>
  </VTimeline>
</template>

<style lang="scss" scoped>
  :deep() {
    li {
      margin-left: 32px;
    }

    .math {
      overflow-x: auto;
    }

    p:has(img) {
      text-align: center;
    }

    .math,
    img {
      max-width: 100%;
    }

    .v-timeline-item__body {
      width: 100%;
    }

    .v-timeline-divider__dot {
      margin-top: 7px;
    }

    @media only screen and (max-width: 960px) {
      .v-timeline-item__body {
        padding-left: 12px !important;
        width: calc(100vw - 46px);
      }

      .v-timeline-item__opposite {
        padding-right: 0px !important;
      }
    }
  }
</style>
