<script lang="ts" setup>
  import { match, P } from 'ts-pattern'
  import MDParser from '@/utils/md-parser'
  import { Argument, formatCode, getArguments } from '@/utils/source-code'

  const props = defineProps<{
    number: number
    state: 'open' | 'closed'
  }>()

  const chapter = String(Math.floor(props.number / 10) + 1).padStart(2, '0')
  const exercise = String(props.number).padStart(2, '0')
  const isSolved = ref<boolean>(
    import.meta.env.PROD ? props.state === 'closed' : true,
  )
  const sourceCode = ref<string>()
  const isCopied = ref(false)
  const code = ref<string>()
  const args = ref<Argument[]>()
  const input = ref<string[]>()
  const output = ref(await mdCode('// output'))
  const Ex = ref()

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(sourceCode.value!)
      isCopied.value = true
      setTimeout(() => (isCopied.value = false), 1000)
    } catch (error) {
      console.error(error)
    }
  }

  async function mdCode(code: string) {
    return await new MDParser().parse(`\`\`\`ts\n${code}\n\`\`\``)
  }

  async function Run() {
    const result = Ex.value
      ? Ex.value[`ex${exercise}`](
          ...input.value!.map((value, i) =>
            args.value![i].type === 'number'
              ? Number(value || undefined)
              : value || undefined,
          ),
        )
      : '// output'

    const parseResult: string = match<
      | string
      | (string | number | string[][] | (boolean | string[][]))[]
      | object
    >(result)
      // string
      .with(P.string, () =>
        result.includes("'") ? `"${result}"` : `'${result}'`,
      )
      // string[]
      .with(P.array(P.string), () => result.join('\n'))
      // number[]
      .with(P.array(P.number), () => JSON.stringify(result))
      // string[][][]
      .with(P.array(P.array(P.array(P.string))), () =>
        result.map((r: string[]) => JSON.stringify(r)).join('\n'),
      )
      // (boolean | string[][])[]
      .with(P.array(P.union(P.boolean, P.array(P.array(P.string)))), () =>
        result.map((r: string[]) => JSON.stringify(r)).join('\n'),
      )
      // object
      .otherwise(() => JSON.stringify(result, null, 2))

    output.value = await mdCode(parseResult)
  }

  onMounted(async () => {
    const text: string = isSolved.value
      ? await (async () => {
          try {
            const response = await import(
              `../chapters/${chapter}/ex${exercise}.ts?raw`
            )
            return response.default
          } catch (error) {
            console.error(`ex${exercise}.ts has not been implemented`)
            isSolved.value = false
            return ''
          }
        })()
      : ''
    sourceCode.value = formatCode(text)
    code.value = await mdCode(sourceCode.value)
    args.value = getArguments(sourceCode.value, `ex${exercise}`)
    input.value = args.value.map((arg) => String(arg.default))
    Ex.value = isSolved.value
      ? await await import(`../chapters/${chapter}/ex${exercise}.ts`)
      : undefined
  })
</script>

<template>
  <div v-if="Ex">
    <VBtn id="copy" variant="plain" @click="copyToClipboard">
      <VIcon icon="mdi-content-copy" />
      <VTooltip
        :model-value="isCopied"
        activator="parent"
        location="top"
        text="Copied!"
        :open-on-hover="false"
      />
    </VBtn>
    <div class="mt-2" v-html="code"></div>
    <VRow class="py-4">
      <VCol v-if="args!.length" class="pe-0">
        <VRow>
          <VCol
            v-for="(arg, i) in args"
            :key="i"
            cols="12"
            :md="Math.ceil(12 / args!.length)"
            class="d-flex flex-column"
          >
            <VTextarea
              v-model="input![i]"
              :label="arg.name"
              :placeholder="String(arg.default)"
              variant="outlined"
              hide-details="auto"
              rows="1"
              auto-grow
              clearable
              @click:clear="input![i] = ''"
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol class="v-col-auto">
        <VBtn
          color="primary"
          :style="{ 'margin-top': (args!.length > 0 ? 10 : 0) + 'px' }"
          @click="Run"
        >
          Run
        </VBtn>
      </VCol>
    </VRow>
    <div v-html="output"></div>
  </div>
</template>

<style lang="scss" scoped>
  .v-btn#copy {
    position: absolute;
    right: 0;
  }
</style>
