<script lang="ts" setup>
  import { Exercise } from '@/store/app'

  const props = defineProps<{
    exercises: Exercise[]
    maxWidth: number
  }>()

  const theme = useTheme()
  const route = useRoute()

  const dark = computed(() => theme.global.current.value.dark)
  const cordCardMaxWidth = computed(() => `${props.maxWidth}px`)

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
      const { state } = props.exercises[number % 10]
      if (props.exercises.some((exercises) => exercises.number === number)) {
        const searchExercise = setInterval(() => {
          const exercise = document.getElementById(`ex${number}`)
          if (
            exercise &&
            exercise.parentElement!.children.length >=
              (state === 'open' ? 2 : 3)
          ) {
            const y = exercise.getBoundingClientRect().top + scrollY - 60
            scrollTo({ top: y, behavior: 'smooth' })
            clearInterval(searchExercise)
          }
        }, 500)
      }
    }
  }

  async function copyLinkToClipboard(exercise: number) {
    try {
      await router.push({
        name: 'Chapter',
        params: { chapter: route.params.chapter },
        hash: `#${exercise}`,
      })
      await navigator.clipboard.writeText(location.href)
    } catch (error) {
      console.error(error)
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
      <h2 :id="`ex${exercise.number}`">
        {{ exercise.title }}
        <VBtn
          density="compact"
          icon="mdi-link"
          variant="text"
          @click="copyLinkToClipboard(exercise.number)"
        />
      </h2>
      <div v-html="exercise.body.split(/<h2>.+<\/h2>\n/).slice(1)[0]"></div>
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

      @media only screen and (min-width: 960px) {
        max-width: v-bind(cordCardMaxWidth);
      }
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
