<script lang="ts" setup>
  import { Chapters } from '@/store/app'

  defineProps<{
    chapters: Chapters
  }>()

  const router = useRouter()

  const open = ref()
</script>

<template>
  <VList v-model:opened="open" density="compact" nav>
    <VListItem title="Chapters" />
    <VDivider />
    <VListGroup
      v-for="(chapter, number) in chapters"
      :key="number"
      :value="`ch${chapter.number}`"
    >
      <template v-slot:activator="{ props }">
        <VListItem
          v-bind="props"
          :title="
            (chapter.number < 10 ? '0' : '') +
            chapter.title.replace('Chapter ', '')
          "
        />
      </template>
      <VListItem
        v-for="exercise in chapter.exercises"
        :key="exercise.number"
        :title="exercise.title"
        :value="`ex${exercise.number}`"
        @click="
          router.push({
            name: 'Chapter',
            params: { chapter: chapter.number },
            hash: `#${exercise.number}`,
          })
        "
      />
    </VListGroup>
  </VList>
</template>
