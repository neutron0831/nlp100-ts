<script lang="ts" setup>
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import Papa from 'papaparse'

  const itemsPerPage = ref(10)
  const search = ref('')
  const headers = ref<
    {
      key: string
      title: string
      align?: 'start' | 'end'
      sortable?: boolean
    }[]
  >([
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
  ])
  const items = ref()

  onMounted(async () => {
    const { default: popularNames } = await import(
      '@/assets/popular-names.txt?raw'
    )
    items.value = Papa.parse(
      headers.value.map((header) => header.key).join('\t') +
        '\n' +
        popularNames,
      {
        header: true,
        transformHeader: undefined,
        dynamicTyping: true,
        skipEmptyLines: true,
      },
    ).data
  })
</script>

<template>
  <VExpansionPanels>
    <VExpansionPanel>
      <VExpansionPanelTitle
        expand-icon="mdi-paperclip"
        collapse-icon="mdi-paperclip"
      >
        popular-names.txt
      </VExpansionPanelTitle>
      <VExpansionPanelText class="overflow-y-auto">
        <VDataTable
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          item-key="name"
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
