<script setup>
import { reactive, onMounted } from 'vue'
import {
  exitApp,
  getInfo,
  getState,
  getLaunchUrl,
  minimizeApp,
  removeAllListeners,
  onAppStateChange
} from '@/services'

const actionsResult = reactive({})
const eventsResult = reactive({})

const setInfo = async () => {
  actionsResult.value = await getInfo()
}

const setState = async () => {
  actionsResult.value = await getState()
}

const setLaunchUrl = async () => {
  actionsResult.value = await getLaunchUrl()
}

onMounted(async () => {
  onAppStateChange((data) => {
    eventsResult.value = data
  })
})
</script>
<template>
  <VToolBar show-back />
  <VContainer class="flex flex-col gap-3">
    <VCard>
      <template #body>
        <strong>Actions Result:</strong>
        {{ actionsResult?.value }} <br>
        <strong>Events Result:</strong>
        {{ eventsResult.value }}
      </template>
    </VCard>
    <VBtn @click="setInfo">
      get app info
    </VBtn>
    <VBtn @click="setState">
      get app state
    </VBtn>
    <VBtn @click="setLaunchUrl">
      get app launch url
    </VBtn>
    <VBtn @click="minimizeApp">
      minimize app
    </VBtn>
    <VBtn @click="exitApp">
      exit app
    </VBtn>
    <VBtn @click="removeAllListeners">
      remove all listeners
    </VBtn>
  </VContainer>
</template>
