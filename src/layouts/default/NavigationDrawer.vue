<script lang="ts" setup>
  const props = defineProps<{
    drawer: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:drawer', value: boolean): void
  }>()

  const store = useStore()

  const open = computed(() => props.drawer)
  const chapters = storeToRefs(store).getChapters
</script>

<template>
  <VNavigationDrawer
    v-model="open"
    location="left"
    @update:model-value="emit('update:drawer', $event)"
  >
    <ChapterList :chapters="chapters" />
  </VNavigationDrawer>
</template>
