<script setup>
import { ref, reactive, computed } from 'vue'
import { showActions } from '@/services'
const actionSelected = ref(null)
const actionSheetOptions = reactive({
  title: 'Photo Options',
  message: 'Select an option to perform',
  options: [
    {
      title: 'Upload'
    },
    {
      title: 'Share'
    },
    {
      title: 'Remove'
    }
  ]
})

const openActionSheet = async () => {
  actionSelected.value = await showActions(actionSheetOptions)
}

const addItem = () => {
  actionSheetOptions.options.push({ title: 'New' })
}

const items = computed(() => actionSheetOptions.options)
</script>
<template>
  <ToolBar showBack />
  <VContainer class="flex flex-col justify-items-center gap-3">
    <input class="input input-bordered input-primary w-full" type="text" v-model="actionSheetOptions.title" />

    <h3>Items:</h3>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        {{ idx }} - {{ item.title }}
      </li>
    </ul>
    Action Sheet Index Selected: {{ actionSelected?.index }}

    <button class="btn" @click="openActionSheet">open</button>
    <button class="btn" @click="addItem">add item</button>
  </VContainer>
</template>
