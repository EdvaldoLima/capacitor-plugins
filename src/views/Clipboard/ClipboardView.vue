<script setup>
import { writeClipboard, readClipboard } from '@/services'
import { onMounted, reactive } from 'vue'

const clipboard = reactive({})
const textCopy = reactive({
  string: 'My text write clipboard'
})

const write = async () => {
  await writeClipboard(textCopy)
  await read()
}

const read = async () => {
  clipboard.value = await readClipboard()
}

onMounted(async () => {
  await read()
})
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col gap-3">
    <input
      v-model="textCopy.string"
      class="input input-bordered input-primary w-full"
      type="text"
    >
    <VCard>
      <template #body>
        <strong>clipboard result:</strong>
        {{ clipboard.value }}
      </template>
    </VCard>

    <VBtn @click="write">
      copy text to clipboard
    </VBtn>
  </VContainer>
</template>
