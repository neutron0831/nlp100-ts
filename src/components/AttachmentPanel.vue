<script lang="ts" setup>
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import Papa from 'papaparse'
  import { basename, extname } from 'path-browserify'

  type DataTableHeader = {
    key: string
    title: string
    align?: 'start' | 'end'
    sortable?: boolean
  }

  const props = defineProps<{
    chapter: 2 | 3
  }>()

  const itemsPerPage = ref(10)
  const search = ref('')

  const attachments = reactive<{
    [chapter: number]: {
      title: string
      itemKey: string
      headers: DataTableHeader[]
    }
  }>({
    2: {
      title: 'popular-names.txt',
      itemKey: 'name',
      headers: [
        { title: 'Name', align: 'start', sortable: true, key: 'name' },
        {
          title: 'Gender',
          align: 'start',
          sortable: false,
          key: 'gender',
        },
        {
          title: 'Number',
          align: 'end',
          sortable: true,
          key: 'number',
        },
        { title: 'Year', align: 'end', sortable: true, key: 'year' },
      ],
    },
    3: {
      title: 'enwiki-country.json.gz',
      itemKey: 'title',
      headers: [
        {
          title: 'Title',
          align: 'start',
          sortable: true,
          key: 'title',
        },
        {
          title: 'Text',
          align: 'start',
          sortable: false,
          key: 'text',
        },
      ],
    },
  })
  const attachment = computed(() => attachments[props.chapter])
  const items = ref<any[]>()

  async function fetchAttachment(chapter: typeof props.chapter) {
    const { title, headers } = attachment.value
    const ext = extname(title)
    const file = basename(title, ext)
    let { default: text } = await import(
      ext === '.txt' ? `@/assets/${file}.txt?raw` : `@/assets/${file}.gz?raw`
    )
    text = text.trim()

    if (chapter === 2) {
      items.value = Papa.parse(
        headers.map((header) => header.key).join('\t') + '\n' + text,
        {
          header: true,
          transformHeader: undefined,
          dynamicTyping: true,
          skipEmptyLines: true,
        },
      ).data
    } else if (chapter === 3) {
      items.value = text.split('\n').map((line: string) => JSON.parse(line))
    }
  }

  watch(
    () => props.chapter,
    async () => await fetchAttachment(props.chapter),
    { immediate: true },
  )
</script>

<template>
  <VExpansionPanels>
    <VExpansionPanel>
      <VExpansionPanelTitle
        expand-icon="mdi-paperclip"
        collapse-icon="mdi-paperclip"
      >
        {{ attachment.title }}
      </VExpansionPanelTitle>
      <VExpansionPanelText class="overflow-y-auto">
        <VDataTable
          v-model:items-per-page="itemsPerPage"
          :headers="attachment.headers"
          :item-key="attachment.itemKey"
          :items="items"
          :search="search"
          loading-text="Loading... Please wait"
          density="compact"
        >
          <template #footer.prepend>
            <VTextField
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              clearable
              hide-details
              density="compact"
            />
          </template>
        </VDataTable>
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style lang="scss" setup>
  .v-data-table__td {
    white-space: nowrap;
  }
</style>
